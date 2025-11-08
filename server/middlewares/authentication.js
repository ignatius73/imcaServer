const axios = require('axios');
const jwt = require('jsonwebtoken');

/**
 * Middleware para verificar token de Keycloak
 * Valida el token usando el endpoint de userinfo de Keycloak
 */
let verificaToken = async (req, res, next) => {
    try {
        // Obtener el token del header Authorization (formato estándar Bearer)
        const authHeader = req.get("Authorization");

        // También soportar el header 'token' por compatibilidad con código existente
        const tokenHeader = req.get("token");

        let token;

        if (authHeader && authHeader.startsWith('Bearer ')) {
            token = authHeader.substring(7);
        } else if (tokenHeader) {
            token = tokenHeader;
        } else {
            return res.status(401).json({
                ok: false,
                message: 'Token no proporcionado. Use el header Authorization: Bearer <token> o token: <token>'
            });
        }

        // Validar el token con Keycloak usando el endpoint de userinfo
        const keycloakUrl = process.env.KEYCLOAK_URL;
        const realm = process.env.KEYCLOAK_REALM;
        const userinfoUrl = `${keycloakUrl}/realms/${realm}/protocol/openid-connect/userinfo`;

        const response = await axios.get(userinfoUrl, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        // Si la petición es exitosa, el token es válido
        // Guardamos la información del usuario en req.usuario
        req.usuario = response.data;
        req.token = token;

        // Decodificar el JWT para obtener roles y otra información
        const decodedToken = jwt.decode(token);
        req.decodedToken = decodedToken;

        next();

    } catch (error) {
        // Si el token es inválido o expiró, Keycloak devolverá 401
        if (error.response) {
            return res.status(401).json({
                ok: false,
                message: 'Token inválido o expirado',
                error: error.response.data
            });
        }

        // Error de conexión con Keycloak
        console.error('Error conectando con Keycloak:', error.message);
        return res.status(500).json({
            ok: false,
            message: 'Error al validar token con el servidor de autenticación',
            error: error.message
        });
    }
};

/**
 * Middleware para verificar que el usuario tenga rol de administrador
 * Debe usarse después de verificaToken
 */
let verificaRol = (req, res, next) => {
    try {
        const decodedToken = req.decodedToken;

        if (!decodedToken) {
            return res.status(403).json({
                ok: false,
                message: 'No se pudo verificar el rol del usuario'
            });
        }

        // Los roles en Keycloak pueden estar en diferentes lugares dependiendo de la configuración
        // Verificamos en resource_access (roles del cliente) y realm_access (roles del realm)
        let hasAdminRole = false;

        // Verificar roles del realm
        if (decodedToken.realm_access && decodedToken.realm_access.roles) {
            hasAdminRole = decodedToken.realm_access.roles.includes('ADMIN_ROLE') ||
                          decodedToken.realm_access.roles.includes('admin');
        }

        // Verificar roles del cliente
        const clientId = process.env.KEYCLOAK_CLIENT_ID;
        if (!hasAdminRole && decodedToken.resource_access && decodedToken.resource_access[clientId]) {
            hasAdminRole = decodedToken.resource_access[clientId].roles.includes('ADMIN_ROLE') ||
                          decodedToken.resource_access[clientId].roles.includes('admin');
        }

        if (hasAdminRole) {
            next();
        } else {
            return res.status(403).json({
                ok: false,
                message: "Se necesita un rol de administrador para realizar esta acción"
            });
        }

    } catch (error) {
        console.error('Error verificando rol:', error);
        return res.status(500).json({
            ok: false,
            message: 'Error al verificar el rol del usuario',
            error: error.message
        });
    }
};


module.exports = {
    verificaToken,
    verificaRol
};