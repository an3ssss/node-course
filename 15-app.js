let express = require('express');
let app =  express();

// req => middleware => res

function logger(req, res, next) {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
}

app.use(logger);

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/about', (req, res) => {
    res.send('About');
})

// /api

function secondLogger(req, res, next) {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    console.log('Logger 02');
    next();
}

app.use('/api', secondLogger);

app.get('/api/products', (req, res) => {
    res.json({product: "shirt", price: 7500});
});

app.get('/api/items', (req, res) => {
    res.json({items: 5});
})

app.all('/*splat', (req, res) => {
    res.status(404).send('Page not found');
});

app.listen(5000, () => {
    console.log('Server listening on port 5000');
});