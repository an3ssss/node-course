const { log } = require('console');
let os = require('os');

// OS
// info about current user

const user = os.userInfo();
console.log(user.username);

// method returns the system uptime in seconds

const upTime = os.uptime();
console.log(upTime + ' s');

// OOOOOOOOOOO

let currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);

// path ----------------------------------

console.log('--------------');

let path = require('path');

console.log(path.sep);

// path.join();

let filePath = path.join('Content', 'subfolder', 'test.txt');
console.log(filePath);

// path.basename();

let base = path.basename(filePath);
console.log(base);

// path.resolve();

let absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);

// FS - File System

let fs = require('fs');

// fs.readFileSync();
// fs.writeFileSync;

console.log('--------------');

let first = fs.readFileSync('./Content/first.txt', 'utf8');
let second = fs.readFileSync('./Content/second.txt', 'utf8');

console.log(first);
console.log(second);

fs.writeFileSync('./Content/results/first-result.txt', `the result is : ${first}`);
fs.writeFileSync('./Content/results/second-result.txt', `the result is : ${second}`);

// fs.readFile();
// fs.writeFile();

console.log('--------------');

fs.readFile('./Content/first.txt', 'utf8' , (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    }
    fs.writeFile('./Content/results-Async/first-result.txt', `the result is : ${data}` ,'utf8', () => {
        if (err) {
            console.error('Error Writing File:', err);
            return;
        }
        console.log('File 01 Written Successfully');
    })
});

fs.readFile('./Content/second.txt', 'utf8' , (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    }
    fs.writeFile('./Content/results-Async/second-result.txt', `the result is : ${data}` ,'utf8', () => {
        if (err) {
            console.error('Error Writing File:', err);
            return;
        }
        console.log('File 02 Written Successfully');
    })
});

// HTTP -----------------------

console.log('--------------');

let http = require('http');

let server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    }
    else if (req.url === '/anes') {
        res.end('Anes 67');
    }
    else {
        res.end('<p style="font-size: 50px; text-align: center;">Oops!</p>');
    }
})

server.listen(5000);