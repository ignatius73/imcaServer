const jwt = require('jsonwebtoken');

// VerificarToken

let verificaToken = (req, res, next) => {
    let tkn = req.get("token");
    jwt.verify(tkn, process.env.SEED, (err, code) => {
        if (err)
            res.status(401).json({
                ok: false,
                err
            });
        // console.log(tkn);
        //  console.log(code.usuario);
        req.usuario = code.usuario;
        next();
    });



};

let verificaRol = (req, res, next) => {
    console.log(req.usuario);

    let usuario = jwt.decode(req.get('token'));
    console.log(usuario);
    if (usuario.role === 'ADMIN_ROLE') {
        next();

    } else {
        return res.json({
            ok: false,
            message: "Se necesita un rol de administrador para crear un alumne"
        });
    }






};


module.exports = {
    verificaToken,
    verificaRol
};