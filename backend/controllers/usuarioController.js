const Usuario = require('../models/Usuario')

exports.obtenerUsuarios = async (req, res, next) => {
    try {
        const usuarios = await Usuario.find({});
        res.json(usuarios)
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.nuevoUsuario = async (req, res, next) => {

    const { nombre } = req.body;
    try {
        let usuario = await Usuario.findOne({ nombre });

        if (usuario) {
            return res.json("ya existe")
        }

        usuario = new Usuario(req.body);
        await usuario.save();
        res.json({ mesaje: 'El usuario se agregó correctamene' });
    } catch (error) {
        console.log(error);
        next()
    }
}

