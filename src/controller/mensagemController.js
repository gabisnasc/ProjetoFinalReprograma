const MensagensSchema = require("../models/MensagensSchema")
const mongoose = require ("mongoose")

const criarMensagem = (req, res) => {
    MensagensSchema.findOne({mensagem: req.body.mensagem}, function(err,mensagem){
        if(mensagem) {
            res.status(404).send(`mensagem já escrita`)
        } else{
        const novaMensagem = new MensagensSchema(req.body)
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

const atualizarMensagemByID = async (req, res) => {const {id} = req.params
const {titulo, mensagem} = req.body;
try {
    if (id.length < 24 || id.length > 24) {
        return response.status(404).json({
            message: `Por favor digite o id da mensagem.`
        })
    }
    const cozinhaEncontrada = await MensagensSchema.updateOne({titulo, mensagem })
    const mensagemporID = await MensagensSchema.find({
        id
    })
    if (mensagemporID.length == 0) {
        return res.status(404).json({
            message: `A cozinha não foi encontrada.`
        })
    }
    res.json({
        mensagemporID
    })

} catch (error) {
    res.status(500).json({
        message: error.message
    })
}

}
const deletarMensagem = async(req, res) => {
    try {
        const mensagens = await MensagensSchema.findById(req.params.id)
    
        mensagens.delete()
    
        res.status(200).json({
            message: "mensagem deletada com sucesso"
        })
    
    } catch (error) {
        res.status(500).json({
            message: "Tente novamente, mensagem ainda não foi deletado"
        })
}
 }

module.exports = {
    criarMensagem,
    listarMensagem,
    atualizarMensagemByID,
    deletarMensagem
}