const express= require('express');
require('dotenv').config();
const {dbConnection} = require('./database/config');
const mongoose =require('mongoose');


//crear servidor de express
    const app=express();
//

//configurar la base de datos
    dbConnection()
//

//Lectura y parseo del body
    app.use(express.json());
//

//rutas
    app.use('/api/auth/',require('./routes/auth'));
    app.use('/api/evento/',require('./routes/evento'));
    app.use('/api/estadia/',require('./routes/estadia'));
    app.use('/api/paquete/',require('./routes/paquete'));
//

//escuchar peticiones 
    
    app.listen(process.env.PUERTO,()=>{
        console.log(`servidor escuchando en el puerto ${process.env.PUERTO}`);
    });
//