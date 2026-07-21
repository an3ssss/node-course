let express = require('express');
let app = express();
let port = 5000;
let { people } = require('./modules/people.js');

app.get('/', (req, res) => {
    res.send('<h1>Welcome to our home page</h1>')
})

app.set('json spaces', 2);

app.get('/api/people', (req, res) => {
    res.json(people);
});

app.get('/api/people/:id', (req, res) => {
    let { id } = req.params;
    const person = people.filter(per => per.id == id);
    res.json(person);
})

app.all('/*splat', (req, res) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});