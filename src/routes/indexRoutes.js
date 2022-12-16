const router = require("express").Router();

router.get("/", (request, response) => {
  response.send({
    versao: "1.0",
    titulo: "Projeto vai ficar tudo bem",
    descricao:
      "O projeto *Tranformar o mundo* ou *Já deu tudo certo* ou *Vai ficar tudo bem* é um projeto que busca o melhor de cada pessoa. No mundo de hoje somos consumidos pelo excesso de trabalho, pelas questões pessoais e por todos o problemas que nos afligem. *Vai ficar tudo bem* veio para ajudar na saúde mental de cada um que precisa de uma palavra de apoio, que se sente sozinho e/ou não tem mais esperança de dias melhores. Tendo como principal objetivo auxiliar a vida de quem precisa através de mensagens motivacionais.",
  });
});

module.exports = router;