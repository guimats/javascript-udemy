const express = require('express');
const app = express();
//        rota         rota     param  query             query
// http://facebook.com/profiles/12345?campanha=googleads&nome_camp=seila

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    `);
});

app.get('/testes/:idUsuarios?/:parametros?', (req, res) => {
    console.log(req.query);
    res.send(req.query);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});