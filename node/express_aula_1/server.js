const express = require('express');
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST    GET   PUT     DELETE

// http://meusite.com/ <- GET -> entregue a página /
// http://meusite.com/sobre <- GET -> entregue a página /sobre

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar formúlario</button>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulario!');
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente!');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});