//Hacer llamado a express
const express = require('express');
const routes = require('./routes');
const path = require('path');

//Crear app de express
const app = express();

//cargar los archivos estaticos
app.use(express.static('public'));

//Habilitar el pug
app.set('view engine', 'pug');

//Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

//Creas las rutas con app.use, la siguiente sintaxis sirve para las rutas en general
app.use('/', routes());
app.use('/joyeria', routes());
app.use('/cadenas', routes());
app.use('/aretes', routes());
app.use('/anillos', routes());
app.use('/letras', routes());
app.use('/ofertas', routes());
app.use('/contacto', routes());
app.use('/preguntas', routes());
app.use('/login', routes());
app.use('/help', routes());
app.use('/register', routes());
app.use('my-cart', routes());

//Creando el puerto
//Siempre llamas la app seguido de un punto y el puerto con un listen
app.listen(1200);