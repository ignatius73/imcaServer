const express = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const app = express();



app.get('/usuario', (req, res) => {
    let desde = req.query.desde || 0;
    desde = Number(desde);
    let limite = req.query.limite || 0;
    limite = Number(limite);
    Usuario.find({ estado: true }, 'nombre email')

    .skip(desde)
        .limit(limite)
        .exec((err, usuarios) => {
            if (err)
                return res.status(400).json({
                    ok: false,
                    err
                });
            Usuario.count({ estado: true }, (err, cuantos) => {
                res.json({
                    ok: true,
                    usuarios,
                    cuantos
                });
            });

        });


});


app.post('/usuario', (req, res) => {
    console.log(req.body);
    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        edad: body.edad,
        direccion: body.direccion,
        email: body.email,
        passwd: bcrypt.hashSync(body.passwd, 10),
        role: body.role,
        estado: body.estado,
        google: body.google
    });

    usuario.save((err, UsuarioDB) => {
        if (err)
            return res.status(400).json({
                ok: false,
                err
            });
        let user = _.pick(UsuarioDB, ['nombre', 'edad', 'direccion', 'email']);
        res.json({
            user
        });
    });

});

app.put('/usuario/:id', (req, res) => {
    let body = req.body;
    let id = req.params.id;
    let user = _.pick(body, ['nombre', 'edad', 'direccion']);
    Usuario.findByIdAndUpdate(id, user, { new: true, runValidators: true }, (err, UsuarioDB) => {
        if (err)
            return res.status(400).json({
                ok: false,
                err
            });
        let user = _.pick(UsuarioDB, ['nombre', 'edad', 'direccion', 'email']);
        res.json({
            user
        });
    });


});

app.delete('/usuario/:id', (req, res) => {
    let id = req.params.id;
    console.log(`Imprimo ${id}`);
    //Usuario.findByIdAndRemove((err, usuarioBorrado) => {
    let cambiaEstado = {
        estado: false
    }

    Usuario.findByIdAndUpdate(id, { cambiaEstado }, { new: true }, (err, usuarioDB) => {

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
        let user = usuarioDB;
        res.json({
            ok: true,
            usuarioDB
        });
    });

});


module.exports =
    app;