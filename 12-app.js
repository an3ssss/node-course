const express = require('express');
const app = express();
let path = require('path');
const { getDate } = require('./modules/time');
const { products } = require('./modules/products');


app.set('json spaces', 2);

app.get('/', (req, res) => {
    let date = getDate('date and time');
    res.send(`<a href="/api/products">products</a> 
             <p>${date}</p>`);
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/price-name', (req, res) => {
    let newProducts = products.map((product) => {
        let {name, price} = product;
        return {name, price};
    });
    res.json(newProducts);
});

app.use(express.static('./app-10-content'));

app.all('/*splat', (req, res) => {
    res.sendFile(path.resolve(__dirname, './app-10-content/index.html'));
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});