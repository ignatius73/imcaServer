const mongo = require('mongoose');
const unique = require('mongoose-unique-validator');


const MOVIMIENTOS = {
    values: ["C", "D"],
    message: "{VALUE} no es un movimiento válido"

};
let Schema = mongo.Schema;

let CajaSchema = new Schema({
    fecha: {
        type: Date,
        default: Date.now()
    },
    movimiento: {
        type: String,
        required: [true, "Campo Obligatorio"],
        enum: MOVIMIENTOS
    },
    importe: {
        type: Number,
        required: [true, 'Campo Obligatorio']
    },
    detalle: {
        type: String,
        required: [true, 'Campo Obligatorio']
    },
    saldo: {
        type: Number

    },

});

//AlumnoSchema.plugin(unique, { message: '{PATH} debe ser único' });

module.exports = mongo.model('Caja', CajaSchema);