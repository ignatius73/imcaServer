require('./config/config');


const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongoose');
const cors = require('cors');



const app = express();

mongo.set('useFindAndModify', false);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(require('./rutas/index'));


//Habilitar carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));


mongo.connect(process.env.URLDB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const db = mongo.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Conectado a MongoDB!');
});
app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
});