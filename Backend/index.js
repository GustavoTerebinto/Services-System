const express = require('express');

const server = express();
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.listen(8001, () => {console.log('servidor rodando')});

server.get('/yarn', (req, res) => {
    res.send('Hello World')
});

server.post('/teste', (req, res) => {
    const nome = req.body.cliente;
    res.send(`Olá ${nome}`);
});

