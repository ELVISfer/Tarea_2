const express = require('express');
const app = express();

require('dotenv').config();

const port = process.env.PORT;

//middleware (Son funciones que se ejecutan antes de llegar a los end point)

app.use(express.json());
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();

});

//end points 

const producto = require('./Rutas/producto');
app.use('/api/producto', producto );

const curso = require('./Rutas/curso');
app.use('/api/curso', curso );

const quienesSomos = require('./Rutas/quienesSomos');
app.use('/api/quienesSomos', quienesSomos );

const contacto = require('./Rutas/contacto');
app.use('/api/contacto', contacto );

app.listen( port, ()=>{

    console.log(`Servidor en el puerto ${port}`);

});