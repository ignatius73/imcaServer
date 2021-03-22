const mongo = require('mongoose');
const unique = require('mongoose-unique-validator');

let Schema = mongo.Schema;

let ContadorSchema = new Schema({
    _id: {
        type: String,
        required: [true, 'Campo Obligatorio']
    },

    sequence_value: {
        type: Number,
        required: [true, 'Campo Obligatorio']
    }





});

//AlumnoSchema.plugin(unique, { message: '{PATH} debe ser único' });

module.exports = mongo.model('Contadores', ContadorSchema);