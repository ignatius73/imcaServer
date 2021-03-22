const mongo = require('mongoose');
const unique = require('mongoose-unique-validator');

let Schema = mongo.Schema;

let ReciboSchema = new Schema({
    idUsuario: {
        type: String,
        required: [true, "Campo Obligatorio"]
    },
    /*cuerpo: [{
        detalle: String,
        importe: Number

    }],*/

    detalles: [{
        type: String
    }],
    importes: [{
        type: Number
    }],
    total: {
        type: Number,
        required: [true, 'Campo Obligatorio']
    },

    nroRecibo: {
        type: Number,
        required: [true, 'NroRecibo es obligatorio']

    }





});

//AlumnoSchema.plugin(unique, { message: '{PATH} debe ser único' });

module.exports = mongo.model('Recibo', ReciboSchema);