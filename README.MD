### Proposta do Projeto Tranformar o mundo:

O projeto *Já deu tudo certo*  é um projeto que busca o melhor de cada pessoa. No mundo de hoje somos consumidos pelo excesso de trabalho, pelas questões pessoais e por todos o problemas que nos afligem. *Já deu tudo certo* veio para ajudar na saúde mental de cada um que precisa de uma palavra de apoio, que se sente sozinho e/ou não tem mais esperança de dias melhores. Tendo como principal objetivo auxiliar a vida de quem precisa através de mensagens motivacionais. 

### E Como funciona?

O usuário poderá se cadastrar com seu e-mail, nome e cpf e irá gerar um id, também será capaz de cadastrar uma mensagem motivacional e verificar as mensagens que já foram deixadas no projeto.

### Objetivo:

✔️Cadastrar pessoas atráves de um id, e-mail.

✔️Atualizar e/ou editar os dados dos usuários através de id e/ou e-mail 

✔️ Mostrar todos os usuários cadastrado

✔️Deletar dados dos usuários através de id e/ou e-mail 

✔️Cadastrar as mensagens motivacionais

✔️ Mostrar todos os usuários cadastrado

✔️Deletar dados dos usuários através de id e/ou e-mail 

## Rotas do projeto

| Rotas       | Descrição                                   |
| :--------- | :------------------------------------------ |
| `POST/aplicativo/criar` | Cadastrar novo usuário   |
| ` GET/aplicativo/buscar` | Listar usuários   |
| ` PATCH/aplicativo/atualizar/:id` | Alterar algum dado dos usuários   |
| ` DELETE/aplicativo/deletar/:id` | Excluir usuário   |
| `GET/mensagens/` | localizar mensagens por id  |
| `POST/mensagens/criar` | Cadastrar novas mensagens |
| `PUT/mensagens/atualizar:id`| Alterar dados da mensagens |
|`DELETE/mensagens/deletar/:id`| Excluir mensagens     |

### Recursos e tecnologias utilizadas para a construção da API:

✔️Node.Js - versão 12.18.3;
✔️Gerenciador de pacotes Node.Js npm - versão 6.14.6;
✔️Dependências Node.Js:
✔️Express - versão 4.17.1;
✔️-Body-parser - versão 1.19.0;
✔️Mongoose - versão 6.0.2;
✔️Dotenv-safe - versão 8.2.0;
✔️Jsonwebtoken - versão 8.5.1;
✔️Bcrypt - versão 5.0.1;
✔️Nodemon - versão 2.0.6;
✔️Cors - versão 2.8.5;
✔️MongoDB;
✔️MongoDB Atlas;
✔️Git;
✔️Visual Studio Code;
✔️Insominia;

## Como rodar a aplicação :arrow_forward:

No terminal, clone o projeto:

```
git clone https://github.com/gabisnasc/Projeto-Final-Reprograma
```

Com o projeto baixado, execute o seguinte comando para que os pacotes rodem na sua máquina

```
npm init -y
```

E execute o comando abaixo para executar o projeto: (:warning: atenção o projeto utiliza a porta 1315)

```
npm start

```


