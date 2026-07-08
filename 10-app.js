let http = require('http');
let fs =  require('fs');

let errorPage = fs.readFileSync('./app-10-content/index.html', 'utf8');
let errorPageStyle = fs.readFileSync('./app-10-content/style.css', 'utf8');
let errorPageScript = fs.readFileSync('./app-10-content/index.js', 'utf8');
let errorPageSvg = fs.readFileSync('./app-10-content/error-svg.svg', 'utf8');

let server = http.createServer((req, res) => {
    console.log('user hit the server');
    let url = req.url;
    if (url === '/') {
        res.writeHead(200, 'AYAYAY', { "content-type": "text/plain"});
        res.end('Welcome to our home page');
    }
    else if (url === '/html') {
        res.writeHead(200, { "content-type": "text/html"});
        res.end('<h1>Welcome to our home page</h1>');
    }
    // 404 error style
    else if (url === '/style.css') {
        res.writeHead(200, { "content-type": "text/css"});
        res.end(errorPageStyle);
    }
    // 404 error script
    else if (url === '/index.js') {
        res.writeHead(200, { "content-type": "text/javascript"});
        res.end(errorPageScript);
    }
    // 404 error svg
    else if (url === '/error-svg.svg') {
        res.writeHead(200, { "content-type": "image/svg+xml"});
        res.end(errorPageSvg);
    }
    // 404 error handling
    else {
        res.writeHead(404, { "content-type": "text/html"});
        res.end(errorPage);
    }
});

server.listen(5000, () => {
    console.log('Server listening to 5000');
});