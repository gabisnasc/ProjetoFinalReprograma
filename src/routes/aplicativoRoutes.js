const express = require("express")
const router = express.Router()

const controller = require("../controller/usuariosController")

//rota que permite a criação do usuário no aplicativo
router.post("/criar", controller.criarUsuarios)
//rota que permite a verificar todos dos usuários do projeto que criamos
router.get("/buscar", controller.buscarUsuarios)
//Alterar dados do usuário
router.put("/alteracao", controller.alteracaodeUsuario)
//rota que permite a atualização quando necessários dos usuários na plataforma, edição do nome
router.patch("/atualizar/:id", controller.atualizarUsuarios)
//rota que permite a exclusão dos usuarios
router.delete("/deletar/:id", controller.deletarUsuarios)

module.exports = router