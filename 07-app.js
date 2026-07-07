let EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('greet', (name) => {
    console.log(`Hello ${name}`);
});

customEmitter.emit('greet', 'anes');
customEmitter.emit('greet', 'habibi');

customEmitter.on('response', () => {
    console.log(`data recieved`);
});

customEmitter.on('response', () => {
    console.log('data 02 recieved')
})

customEmitter.emit('response');

console.log('--------------------');

// server.on()

let http = require('http');

let server = http.createServer();

server.on('request', (req, res) => {
    res.end('Welcome');
})

server.listen(3000, () => {
    console.log('server runing on port 3000');
})

server.on('connection', () => {
    console.log('new user connected');
});

server.on('error', (err) => {
    console.error('Error :', err)
})
