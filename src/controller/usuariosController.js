const UsuarioSchema = require("../models/UsuarioSchema")
//const mongoose = require ("mongoose")

const criarUsuarios = (req, res) => {  
    UsuarioSchema.findOne({email:req.body.email}, function(err,email) {

        if (email){ res.status(404).send(`Cadastro com esse e-mail já cadastrado, faça seu login.`);  
        } else {
    const novoUsuario = new UsuarioSchema(req.body)           
    novoUsuario.save(err => {
        if (err) {
        return res.status(404).send({ message: err.message });
        };
        return res.status(201).send(novoUsuario);
            }); 
        } 
    })
};     
const buscarUsuarios = async (req, res) => {
    UsuarioSchema.find((err, usuarios) => {
        if (err) {
            return res.status(424).send({ message: err.message,});
        } else {
            return res.status(200).send(usuarios);
        }
    });
}; 
const encontrarUsuarios = async (req, res) => {
    
    const cpf = req.params.cpf;

    UsuarioSchema.findOne({cpf}, (err, alunos) => {
        if (!alunos) {            
            return res.status(424).send({message:'Usuario não cadastrado com este id'});
        } else if (err) { 
            return res.status(500).send({message: err.message});
        } else {
            return res.status(200).send({alunos})
        }
    })
};
const atualizarUsuarios = async (req, res) => {
    try {
        const usuario = await UsuarioSchema.findById(req.params.id)
        usuario.site = req.body.nome || usuario.nome

        const usuarioAtualizado = usuario.save()
        res.status(200).json({ 
            message: "Usuário atualizada com sucesso!"
        })

    } catch (error) {
        res.status(404).json({
             message: error.message
        })
    }
};
const alteracaodeUsuario = async (req,res) =>{
    const email = req.params.email

    UsuarioSchema.findOne({email}, (err,usuario)=>{
        if(usuario.length > 0){
            return res.status(404).send("Não há usuários com este email para ser atualizada")
        }else{
            UsuarioSchema.updateOne({email}),{$set: req.body}, function (err){
                if(err) {
                    return res.status(500).send({message: err.message})
                }
                return res.status(200).send({message: "Aluno(a) atualizado(a) com sucesso"});
            }
        }

    })

}
const deletarUsuarios = async (req, res) =>{
    try {
    const usuarios = await UsuarioSchema.findById(req.params.id)

    usuarios.delete()

    res.status(200).json({
        message: "usuário deletada com sucesso"
    })

} catch (error) {
    res.status(500).json({
        message: "Tente novamente, usuário ainda não foi deletado"
    })
}
}

module.exports = {
    criarUsuarios,
    buscarUsuarios,
    encontrarUsuarios,
    deletarUsuarios,
    atualizarUsuarios,
    alteracaodeUsuario,
}