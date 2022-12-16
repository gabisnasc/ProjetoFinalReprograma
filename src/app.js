require ("dotenv").config()

const express = require ("express")
const cors = require ("cors")
const app = express() 

const database = require ("./database/mongoConnect")

const rotasdoApp = require ("./routes/aplicativoRoutes")
const rotasdeMensagens = require ("./routes/mensagemRoutes")

app.use(cors())
app.use(express.json())

app.use("/aplicativo", rotasdoApp)
app.use("/mensagens", rotasdeMensagens)

database.connect()

module.exports = app