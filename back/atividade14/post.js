const express = require('express');
const app = express();
app.use(express.json());

const usuarios = [
    {id: 1, nome: 'Thomas' , funcao: 'Professor'},
    {id: 2, nome: 'Anaís' , funcao: 'Diretora'},
    {id: 3, nome: 'Dilma' , funcao: 'Aluna'}
];

const avisos = [
    {id: 1, titulo: 'Aviso 1', descricao: 'Maykon vai deixar o código vermelinho dia 15/08/2026'},
    {id: 2, titulo: 'Aviso 2', descricao: 'Gi vai se estressar com o Maykon dia 15/08/2026'},
    {id: 3, titulo: 'Aviso 3', descricao: 'Allan vai rir da Gi se estressando com Maykon dia 15/08/2026'},
    {id: 4, titulo: 'Aviso 4', descricao: 'Miguel vai ficar olhando a situação e não vai fazer nada dia 15/08/2026'}
];

const tarefas = [
    {id: 1, titulo: 'Tarefa 1', descricao: 'Ajudar o Maykon a fechar uma div'},
    {id: 2, titulo: 'Tarefa 2', descricao: 'Aprender a fazer um código que não fique vermelho'},
    {id: 3, titulo: 'Tarefa 3', descricao: 'Aprender a como dasabortar o código do Maykon'},
];

const reservas = [
    {id: 1, nome: 'Reserva 1', descricao: 'Reserva de um notebook apenas para o Maykon'},
    {id: 2, nome: 'Reserva 2', descricao: 'Reserva de uma sala para a Gi poder punir o Maykon depois dele dixar o código vermelinho'}
];

app.post('/usuarios', (req, res) => {
    const { id, nome, funcao } = req.body;
    res.status(201).json({
        mensagem: 'Usuário criado com sucesso!',
        usuario: { id, nome, funcao }
    });
});

app.post('/avisos', (req, res) => {
    const { id, titulo, descricao } = req.body;
    res.status(201).json({
        mensagem: 'Aviso criado com sucesso!',
        aviso: { id, titulo, descricao }
    });
});

app.post('/tarefas', (req, res) => {
    const { id, titulo, descricao } = req.body;
    res.status(201).json({
        mensagem: 'Tarefa criada com sucesso!',
        tarefa: { id, titulo, descricao }
    });
});

app.post('/reservas', (req, res) => {
    const { id, nome, descricao } = req.body;
    res.status(201).json({
        mensagem: 'Reserva criada com sucesso!',
        reserva: { id, nome, descricao }
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});