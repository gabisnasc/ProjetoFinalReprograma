const express = require("express")
const router = express.Router()

const controller = require("../controller/MensagemController")

// Criar as mensagens
router.post("/criar", controller.criarMensagem)
// Verificar as mensagens criadas
router.get("/buscar", controller.listarMensagem)

// Alterar o id das mensagens
router.put("/atualizar/:id", controller.atualizarMensagemByID)
// alterar o titulo da encontrarMensagem
// router.patch("/atualizar/:id", controller.atualizarUsuarios)
// // apagar a mensagem 
// router.delete("/deletar/:id", controller.deletarMensagem)

module.exports = router