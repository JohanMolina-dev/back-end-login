//importacion de express
const express = require('express');
//importacion de morgan
const morgan = require('morgan');
const apiRouter =require('./routes')
const bodyPArser = require('body-parser');
//llamado de express desde la app
const app = express();
const cors = require('cors');
app.use(cors())

app.use ((req,res, next)=>{
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
res.header("Access-Control-Allow-Methods: GET, POST, DELETE");
next()
});
// uso de morgan bajo dev, middleware para detectar peticiones
app.use(morgan('dev'));
app.use(bodyPArser.json());
app.use(bodyPArser.urlencoded({ extended: true }));

//manejador de ruta, va siempre con request y response
//Metodo que llama a la ruta (funcion anonima va en controllers)
app.use('/api', apiRouter);


//Definicion de puerto
app.set('PORT', 3001)
//escuchador de express optiene el puerto
app.listen(app.get('PORT'), () =>{
    console.log('up server')
});

