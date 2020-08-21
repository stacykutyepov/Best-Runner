const express = require('express');
const app = express();
const { response } = require('express');

var todos = [{ id: 1, title: 'buy the milk' }, { id: 2, title: 'rent a car' }, { id: 3, title: 'feed the cat' }];
let count = todos.length;

app.get('/', (req, res) => {
    res.status(200).json(todos);
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));

app.post('/', (req, res) => {
    var newTodo = JSON.parse(req.body);
    count = count + 1;
    newTodo.id = count;
    todos.push(newTodo);
    response.status(201).json();
})
