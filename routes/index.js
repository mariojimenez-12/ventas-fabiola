const express = require('express');
const router = express.Router();

//Importar el controlador

const proyectoC = require('../controllers/proyectoController');

module.exports = function() {
    //Creando rutas y la ruta para el HOME
    router.get('/', proyectoC.proyectoIndex);
    
        router.get('/joyeria', proyectoC.proyectoJoyeria);
    
        router.get('/cadenas', proyectoC.cadenas);
    
        router.get('/aretes', proyectoC.aretes);
    
        router.get('/anillos', proyectoC.anillos);
    
        router.get('/letras', proyectoC.letras);
    
        router.get('/ofertas', proyectoC.ofertas);
    
        router.get('/contacto', proyectoC.contacto);
    
        router.get('/preguntas', proyectoC.preguntas);

        router.get('/help', proyectoC.help);

        router.get('/register', proyectoC.register);

        router.get('/login', proyectoC.login);    

        router.get('/my-cart', proyectoC.cart);    
    return router;
}