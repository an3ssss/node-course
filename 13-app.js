let path = require('path');
let express = require('express');
let app = express();
let { products } =  require('./modules/products');
let { getDate } = require('./modules/time');

app.get('/api/time', (req, res) => {
    let date = getDate('time');
    res.send(`the time is ${date}`);
});

app.get('/api/date', (req, res) => {
    let date = getDate('date');
    res.send(`the date is ${date}`);
});

app.set('json spaces', 2);

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/name-price', (req, res) => {
    let newProducts = products.map((product) => {
        let {name, price} = product;
        return {name, price};
    })
    res.json(newProducts);
});

/*
app.get(`/api/products/1`, (req, res) => {
    let singleProduct = products.find((product) => product.id === 1);
    res.json(singleProduct);
});
*/


app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID));
    if (!singleProduct) {
        res.status(404).json({ error: "Product not found" });
        return ;
    }
    res.json(singleProduct);
});

app.get('/api/anes', (req, res) => {
    res.send('Anes 67');
});

app.use(express.static('./app-10-content'));

app.all('/*splat', (req, res) => {
    res.status(404).sendFile(path.resolve(__dirname, './app-10-content/index.html'));
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});