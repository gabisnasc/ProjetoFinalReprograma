const mongoose = require ("mongoose");

const mensagensMotivicaionais = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
       },
    titulo: { type: String,lowercase: true,required: true, },
    mensagem: { type: String,lowercase: true,required: true},
}, {
    versionKey: false
});

module.exports = mongoose.model('mensagens motivacionais', mensagensMotivicaionais)