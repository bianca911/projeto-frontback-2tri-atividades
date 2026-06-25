const express = require('express');
const app = express();

app.get('/usuarios', (req, res) => {
    const usuarios =
        ['Ana Silva', 'Bruno Costa', 'Carla Souza'];

    res.send(usuarios.join(','));
});

app.get('/tarefas', (req, res) => {
    const tarefas = ['Estudar Express','Fazer exercícios de rotas', 'Entregar atividade'];

    res.send(tarefas.join(', '));
});

app.get('/reservas', (req, res) => {
    const reservas = ['Mesa 1','Mesa 2','Mesa 3'];

    res.send(reservas.join(', '));
});

app.get('/status', (req, res) => {
    res.send('Sistema ativo');
});

app.get('/turmas', (req, res) => {
    const turmas = ['Turma A', 'Turma B', 'Turma C'];

    res.send(turmas.join(', '));
});

app.listen(3000, () => {
    console.log('rodando na porta 3000');
});