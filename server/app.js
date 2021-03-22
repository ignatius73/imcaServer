require('./config/config');


const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongoose');
const cors = require('cors');



const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
mongo.set('useFindAndModify', false);

// parse application/json
app.use(bodyParser.json());
app.use(cors());
app.use(require('./rutas/index'));


//Habilitar carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));


// parse application/x-www-form-urlencoded


//const port = process.env.PORT || 3000;

//app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {

    let obj = {
        nombre: 'Gabriel',
        edad: '47',
        url: req.url
    };

    res.json(obj);

});





mongo.connect(process.env.URLDB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const db = mongo.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Conectado a MongoDB!');
});
app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
});