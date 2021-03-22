const express = require('express');
const Alumno = require('../../models/alumno');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('underscore');
const app = express();

app.post('/login', (req, res) => {
    console.log(req.body);
    let body = req.body;

    Alumno.findOne({ email: body.email }, (err, user) => {
        if (err)
            return res.status(500).json({
                ok: false,
                err
            });

        if (!user)
            return res.status(400).json({
                ok: false,
                message: 'Usuario o contraseña incorrectos!'
            });


        if (!bcrypt.compareSync(body.passwd, user.passwd))
            return res.json({
                ok: false,
                message: 'Usuario o contraseña incorrectos!'
            });
        let userDB = user;
        let token = jwt.sign({
                userDB
            },
            process.env.SEED, { expiresIn: process.env.CADTOKEN }

        );


        return res.json({
            ok: true,
            message: `Bienvenido de nuevo ${user.nombre}`,
            usuario: user,
            token: token
        });
    });


});


module.exports = app;