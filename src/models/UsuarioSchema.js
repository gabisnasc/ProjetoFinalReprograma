const mongoose = require ("mongoose")

const usuarioSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
       },    
    nome: { 
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true 
    },
    email: { 
        type: String,
        required: true, 
        unique: true }
})

module.exports = mongoose.model("usuario Schema", usuarioSchema)