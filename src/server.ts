import express, { response } from "express"

// @types/express

/**
 * GET => BUSCA DE INFORMAÇÃO,
 * POST => CRIAR/INSERIR UMA INFORMAÇÃO,
 * PUT => ALTERAR INFORMAÇÃO,
 * DELETE => REMOVER INFORMAÇÃO,
 * PATCH => ALTERAR UMA INFORMAÇÃO ESPECÍFICA
 */

const app = express()

app.get("/teste", (req, res) => {
    // REQUEST => ENTRANDO
    // RESPONDE => SAINDO
    return res.send("Olá NLW")
})

app.post("/teste-post", (req, res) => {
    return res.send("Olá NLW método post")
})

app.listen(3001, () => console.log('Server is Runing on port 3001'))