const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bem-vinde professor Mateus!!!');
});

app.get('/sobre', (req, res) => {
    res.send('Este projeto foi desenvolvido para ver se eu fico menos burra em programação.');
});

app.get('/equipe', (req, res) => {
    res.send('A equipe dos Luláticos é formada por: Bianca a maioral, o Allan passivinha, Gi provedora, Maykon abortador e Miguel o estágiario');
});

app.get('/contato', (req, res) => {
    res.send('bianca.pereira.moreira@escola.pr.gov.br');
});

app.listen(3000, () => {
    console.log('rodando na porta 3000');
});