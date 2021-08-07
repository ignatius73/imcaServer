const mongo = require('mongoose');
const unique = require('mongoose-unique-validator');

let roles = {
    values: ["ADMIN_ROLE", "USER_ROLE"],
    message: "{VALUE} no es un rol válido"

};
let Schema = mongo.Schema;

/*let AlumnoSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "Campo Obligatorio"]
    },
    apellido: {
        type: String,
        required: [true, "Campo Obligatorio"]
    },
    edad: {
        type: Number,
        required: [true, "Campo Obligatorio"]
    },

    dni: {
        type: Number,
        unique: true,
        requires: [true, "Campo obligatorio"]
    },
    direccion: {
        type: String

    },
    email: {
        type: String,
        unique: true,
        required: [true, "Campo obligatorio"]
    },
    telefono: {
        type: String

    },
    img: {
        type: String
    }

});*/

let AlumnoSchema = new Schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    edad: {
        type: Number
    },

    dni: {
        type: Number,
        unique: true

    },
    direccion: {
        type: String

    },
    email: {
        type: String,
        unique: true
    },
    telefono: {
        type: String

    },
    img: {
        type: String
    }

});

AlumnoSchema.plugin(unique, { message: '{PATH} debe ser único' });

module.exports = mongo.model('Alumno', AlumnoSchema);