const express = require("express")
const router = express.Router()

const controller = require("../controller/mensagemController")

// Criar as mensagens
router.post("/criar", controller.criarMensagem)
// Verificar as mensagens criadas
router.get("/", controller.listarMensagem)
// Alterar o id das mensagens
router.put("/atualizar/:id", controller.atualizarMensagemByID)
// // apagar a mensagem 
router.delete("/deletar/:id", controller.deletarMensagem)

module.exports = router