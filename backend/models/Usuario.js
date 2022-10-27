const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    rol: {
        type: String,
        required: true,
        
    }
});

module.exports = mongoose.model('Usuario', usuariosSchema);


