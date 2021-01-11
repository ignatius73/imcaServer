const mongo = require('mongoose');
const unique = require('mongoose-unique-validator');

let roles = {
    values: ["ADMIN_ROLE", "USER_ROLE"],
    message: "{VALUE} no es un rol válido"

};
let Schema = mongo.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "Campo Obligatorio"]
    },
    edad: {
        type: Number,
        required: [true, "Campo Obligatorio"]
    },
    direccion: {
        type: String

    },
    email: {
        type: String,
        unique: true,
        required: [true, "El correo es necesario"]
    },
    passwd: {
        type: String,
        required: [true, "La contraseña es obligatoria"]
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: "USER_ROLE",
        enum: roles
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

usuarioSchema.plugin(unique, { message: '{PATH} debe ser único' });

module.exports = mongo.model('Usuario', usuarioSchema);