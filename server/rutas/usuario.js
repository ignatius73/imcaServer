const express = require('express');
const Alumno = require('../../models/alumno');
const Recibo = require('../../models/recibos');
const Contador = require('../../models/contador');
const Caja = require('../../models/caja');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const { verificaToken, verificaRol } = require('../middlewares/authentication');
const caja = require('../../models/caja');
const app = express();




app.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
app.get('/usuario', verificaToken, (req, res) => {
    let desde = req.query.desde || 0;
    desde = Number(desde);
    let limite = req.query.limite || 0;
    limite = Number(limite);
    Alumno.find({ estado: true }, 'nombre email')

    .skip(desde)
        .limit(limite)
        .exec((err, alumnos) => {
            if (err)
                return res.status(400).json({
                    ok: false,
                    err
                });
            Alumno.countDocuments({ estado: true }, (err, cuantos) => {
                res.json({
                    ok: true,
                    usuarios,
                    cuantos
                });
            });

        });


});


app.post('/usuario', [verificaToken, verificaRol], (req, res) => {

    let body = req.body;

    let alumno = new Usuario({
        nombre: body.nombre,
        edad: body.edad,
        direccion: body.direccion,
        email: body.email

    });

    alumno.save((err, AlumnoDB) => {
        if (err)
            return res.status(400).json({
                ok: false,
                err
            });
        let user = _.pick(AlumnoDB, ['nombre', 'edad', 'direccion', 'email', '_id']);
        res.json({
            user
        });
    });

});

app.put('/usuario/:id', [verificaToken, verificaRol], (req, res) => {
    let body = req.body;
    let id = req.params.id;
    let user = _.pick(body, ['nombre', 'edad', 'direccion']);
    Alumno.findByIdAndUpdate(id, user, { new: true, runValidators: true }, (err, UsuarioDB) => {
        if (err)
            return res.status(400).json({
                ok: false,
                err
            });
        let user = _.pick(AlumnoDB, ['nombre', 'edad', 'direccion', 'email', '_id']);
        res.json({
            user
        });
    });


});

app.delete('/usuario/:id', verificaToken, (req, res) => {
    let id = req.params.id;
    //let id = req.usuario.id;
    console.log(`Imprimo ${id}`);
    //Usuario.findByIdAndRemove((err, usuarioBorrado) => {
    let cambiaEstado = {
        estado: false
    };

    console.log(cambiaEstado);

    Alumno.findByIdAndUpdate(id, { estado: false }, { new: true }, (err, AlumnoDB) => {

        if (err)
            return res.status(400).json({
                ok: false,
                err
            });
        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                message: "Usuario no encontrado"
            });

        }
        let user = AlumnoDB;
        res.json({
            ok: true,
            user
        });
    });

});

app.get('/api/usuarios', function(req, res) {
    Alumno.find({}, function(err, alumnos) {
        if (err) {
            res.sendStatus(400).json({
                err
            });
        }
        res.json({
            alumnos
        });
    });
});

app.post('/api/nuevoAlumno', function(req, res) {
    if (!req.body) {
        res.sendStatus(400).json({
            ok: false,
            message: "No recibí nada en el body",

        });
    }
    const body = req.body;
    const alumno = new Alumno(body);
    alumno.save(alumno, function(err, alumno) {
        if (err) return res.json(err);
        res.json({
            alumno
        });
    });
});

app.post('/api/movimientoCaja', (req, res) => {
    if (!req.body) {
        res.sendStatus(400).json({
            ok: false,
            message: "No recibí nada en el body",

        });
    }
    let body = req.body;
    const caja = new Caja(body);
    caja.save(caja, function(err, caja) {
        if (err) return res.json(err);
        res.json({
            caja
        });
    });

});
app.post('/api/nuevoRecibo', (req, res) => {

    let body = req.body;
    console.log(req.body);
    const reciboId = 'reciboId';
    Contador.findOneAndUpdate({ _id: reciboId }, { $inc: { sequence_value: 1 } }, { new: true }, function(err, recibo) {
        if (err)
            return res.status(400).json({
                ok: false,
                err
            });
        let nrorecibo = recibo;
        console.log(typeof(body.detalles));
        console.log(typeof(body.importes));
        body.nroRecibo = nrorecibo.sequence_value;
        recibo = new Recibo(body);
        recibo.save(recibo, function(err, recibo) {
            if (err) return res.json(err);

            res.json({
                ok: true,
                recibo
            });
        });


    });


});


app.get('/api/saldo', function(req, res) {

    Caja.find({},
        function(err, mov) {
            if (err) return res.json({ err });
            let sum = _.reduce(mov, function(memo, reading) {
                return memo + reading.importe;

            }, 0);
            console.log(sum);
            let devol = {
                suma: sum,
                datos: mov
            };
            res.json({ devol });
        }).sort({ '_id': 'desc' });


});

/*app.post('/api/nuevoMovimiento', function ( req, res) {
    let body = req.body;

});*/



function getNextSequenceValue(sequenceName) {
    //   console.log(`${ sequenceName } secuenceName`);
    const sequenceDocument = Contador.findOneAndUpdate({ _id: sequenceName }, { $inc: { sequence_value: 1 } },
        function(err, recibo) {
            if (err) {
                console.log(err);
            }
            //console.log(recibo.sequence_value);
            return recibo;

        });

    console.log(sequenceDocument.sequence_value);
    //return sequenceDocument;
    return sequenceDocument.sequence_value;

}



module.exports =
    app;