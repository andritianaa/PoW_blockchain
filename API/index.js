const bodyParser = require('body-parser')
const express = require('express')
const Blockchain = require('./../blockchain/blockchain')
const PORT = process.env.PORT || 3001
const app = express()
app.use(bodyParser.json())
const blockchain = new Blockchain()
app.get('/blocks', (req, res) => {
    res.status(200).json(blockchain.chain)
})

app.post('/mine', (req, res) => {
    const block = blockchain.addBlock(req.body.data)
    console.log(`Nouveau block: ${block.toString()}`)
    res.redirect('/blocks')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})