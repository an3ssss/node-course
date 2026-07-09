let express = require('express');
let app = express();
let path = require('path');
let fs = require('fs');
const Stream = require('stream');

app.get('/', (req, res) => {
    res.send('<h1>Welcome to our home page</h1>')
});

app.get('/about', (req ,res) => {
    res.send('<h1>About Page</h1>');
});

app.get('/text', (req, res) => {
    fs.readFile('./content/message.txt', 'utf8', (err, data) => {
        if (err) {
            res.status(404).send('Error Sending text');
        }
        res.send(`<p>${data}</p>`);
    })
});

app.get('/image', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'appel-pic.jpg'));
});


app.use(express.static('./app-10-content'));

app.all('/*splat', (req, res) => {
    res.sendFile(path.resolve(__dirname, './app-10-content/index.html'));
});

app.listen(5000, () => {
    console.log('Server is listnening on port 5000...')
});