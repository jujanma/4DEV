const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController')

module.exports = function () {

    router.get('/',
    usuarioController.obtenerUsuarios 
    );

     router.post('/',
    usuarioController.nuevoUsuario 
    );
 
    return router;
}


