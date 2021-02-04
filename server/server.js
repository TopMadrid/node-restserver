require('./config/config');  // Enlaza con las variables locales

const express = require('express');
const app = express()

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/usuario', function (req, res) {
    //res.send('Hello World')
    res.json('get usuario')
})

// Post es para crear nuevos registros
app.post('/usuario', function (req, res) {

    let miBody = req.body;

    if (miBody.nombre === undefined){

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });

    } else {
        res.json({
            persona: miBody
        });

    }
 
});

// El put es muy usado cuando queremos actualizar registros
app.put('/usuario/:id', function (req, res) {
    //res.send('Hello World')
    let miId = req.params.id;
    res.json({miId});
})

// Delete es para cambiar el estado de datos. El registro siempre queda
app.delete('/usuario', function (req, res) {
    //res.send('Hello World')
    res.json('delete usuario');
})

// Manejados de la misma manera que el put para actualizar registros
app.patch('/usuario', function (req, res) {
    //res.send('Hello World')
    res.json('patch usuario')
})



app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});