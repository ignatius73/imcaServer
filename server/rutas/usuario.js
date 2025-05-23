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

app.put('/usuario/:id', [verificaToken, verificaRol], function(req, res) {
    let body = req.body;
    let id = body._id;
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

app.post('/alumno', function(req, res) {

    if (!req.body) {
        return res.sendStatus(400).json({
            ok: false,
            message: "No recibí nada en el body"
        });
    }
    // Obtengo el req y lo imprimo
    let requ = req.body;

    res.json({ 'q': requ });

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
        return res.sendStatus(400).json({
            ok: false,
            message: "No recibí nada en el body",

        });
    }
    let body = req.body;
    // Convertir fecha a ISOString UTC-3
    const dateUtc3 = new Date(body.fecha);
    dateUtc3.setHours(dateUtc3.getHours() - 3);
    body.fecha = dateUtc3.toISOString();

    
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
        body.fechaRecibo = new Date(Date.now() - (3 * 60 * 60 * 1000)).toISOString();
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

            let devol = {
                suma: sum,
                datos: mov
            };


            res.json({ devol });
        }).sort({ '_id': 'desc' });


});

app.put('/api/editaAlumno', function(req, res) {

    let { _id, ...body } = req.body.alumno

    let user = _.pick(body, ['nombre', 'edad', 'direccion']);

    Alumno.updateOne({_id: _id}, { $set: body }, { new: true }, function(err, AlumnoDB) {
        if (err)
            return res.sendStatus(400).json({
                ok: false,
                err
            });
        console.log(`AlumnoDB => ${AlumnoDB}`);    
        let user = _.pick(AlumnoDB, ['nombre', 'edad', 'direccion', 'email', '_id']);

        res.json({
            user

        });
    });

});

app.post('/api/ListMovCajaAlumno', async (req, res) => {
    if (!req.body) {
        return res.sendStatus(400).json({
            ok: false,
            message: "No recibí el id de alumno",

        });
    }
    console.log(req.body.idUsuario);
    await Recibo.find({idUsuario:req.body.idUsuario}, function(err, recibos){
        if(err) res.json({
            error: 'No se encontró el alumno'
        })
        console.log(recibos)
        res.json({
            recibos
        })

    })
    

});

/* app.post('/api/mantenimientoDate', async (req, res) => {

    await setDateToReceipt();
    res.json({
        ok:"Trabajo terminado..."
    })
});

async function setDateToReceipt() {
    await Caja.find({}, function(err, cajas){
        if(err) res.json({
            error: 'No se encontró la caja'
        })
        
        cajas.forEach(element => {
            const nroRecibo = element.detalle.split(" ")
            const fecha = element.fecha
            const nroReciboCaja = Number(nroRecibo[1])
            console.log(typeof(nroReciboCaja))
            console.log(nroReciboCaja)
            Recibo.updateMany(
                {nroRecibo:nroReciboCaja},{ fechaRecibo:fecha},function(err, recibos){
                    if (err){
                        console.log(err)
                        return
                    }
                    //console.log("Updated Docs : ", recibos)
                })
        })
    })
} */




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