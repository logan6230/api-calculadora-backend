// crear un objeto express
const express = require('express');
const evaluate = require('mathjs');


//Crear un objeto que reprsente nuestra aplicacion
const app = express();

// configurar para que reciva json
app.use(express.json());

//configurar cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, OPTIONS");
    next();

});

// crear un servidor(servicio para escuchar peticiones http)
const server = require('http').Server(app);
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});

// definir los entry points de nuestra aplicacion o rutas donde va responder a las peticiones
app.post(
    //ruta en la que va a responder
    '/api/sumar',
    // metodo constructor de la respuesta y peticion
    (req, res) => {

        const { num1, num2 } = req.body;

        const resultado = parseInt(num1) + parseInt(num2);

        res.json(resultado);
    });
app.post(
    //ruta en la que va a responder
    '/api/restar',
    // metodo constructor de la respuesta y peticion
    (req, res) => {

        const { num1, num2 } = req.body;

        // const num1 = req.body.num1;
        // const num2 = req.body.num2;
        const resultado = num1 - num2;

        res.json(resultado);

    });

app.post(
    //ruta en la que va a responder
    '/api/dividir',
    // metodo constructor de la respuesta y peticion
    (req, res) => {
        const { num1, num2 } = req.body;
        let resultado;
        try {
            resultado = num1 / num2;
        } catch (error) {
            resultado = "No se puede dividir por cero";
        }
        res.json(resultado);
    });

app.post(
    //ruta en la que va a responder
    '/api/multiplicar',
    // metodo constructor de la respuesta y peticion
    (req, res) => {
        const { num1, num2 } = req.body;
        let resultado;

        resultado = num1 * num2;

        res.json(resultado);
    });

