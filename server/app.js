require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongoose');



const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(require('./rutas/usuario'));
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





mongo.connect(process.env.urlDB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const db = mongo.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Conectado a MongoDB!');
});
app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
});