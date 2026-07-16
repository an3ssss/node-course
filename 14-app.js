let express = require('express');
let app =  express();

app.get('/', (req, res) => {
    res.send('Welcome to our home page');
});

app.get('/api/v1/query', (req, res) => {
    // Ex: localhost:5000/api/v1/query?name=anes&age=15
    console.log(req.query);
    console.log(req.query.name);
    console.log(req.query.age);
    console.log(req.query.age * 5)
    res.json(req.query);
});

app.all('/*splat', (req, res) => {
    res.status(404).send('Page not found');
});

app.listen(5000, () => {
    console.log('Server listening on port 5000');
});