require('dotenv').config();
require('./config/config');

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongoose');
const cors = require('cors');



const app = express();

// Configuración de Mongoose para versión 5.x
mongo.set('useNewUrlParser', true);
mongo.set('useFindAndModify', false);
mongo.set('useCreateIndex', true);
mongo.set('useUnifiedTopology', true);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(require('./rutas/index'));


//Habilitar carpeta public
//app.use(express.static(path.resolve(__dirname, '../public')));

try {
mongo.connect(process.env.URLDB);
const db = mongo.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Conectado a MongoDB!');
});
} catch (error) {
    console.log('Mongo Connection error');
}

app.listen(process.env.PORT, () => {
    console.log(`Escuchando peticiones...`);
});
