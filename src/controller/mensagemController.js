const MensagensSchema = require("../models/MensagensSchema")
const mongoose = require ("mongoose")

const criarMensagem = (req, res) => {
    MensagensSchema.findOne({mensagem: req.body.mensagem}, function(err,mensagem){
        if(mensagem) {
            res.status(404).send(`mensagem já escrita`)
        } else{
        const novaMensagem = new novaMensagem(req.body)
        novaMensagem.save(err => {
            if(err){
                return res.status(424).send({ message: err.message })
            }
            return res.status(201).send(novaMensagem)
        }) 
        }
    })
}
const listarMensagem = (req, res) => {
    MensagensSchema.find((err, mensagem) => {
        if (err){
            return res.status(404).send({message: err.message})
        } else{
            return res.status(200).send(mensagem)
        }
    })
}
const atualizarMensagemByID = (req, res) => {

}
// const atualizarUsuarios = (req, res) => {

// }
// const deletarMensagem = (req, res) => {

// }

module.exports = {
    criarMensagem,
    listarMensagem,
    atualizarMensagemByID,
    // atualizarUsuarios,
    // deletarMensagem
}