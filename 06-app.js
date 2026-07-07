const { error } = require('console');
let fs = require('fs');
let http = require('http');

// Using Promisses

let getText = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                console.log('Error');
                reject(error);
            }
            resolve(data);
        })
    })
}

let server = http.createServer((req, res) => {
    if (req.url === '/') {
        getText('./06-app-test-server/home.txt')
            .then((data) => {
                console.log(data);
                res.end(data);
            }).catch((error) => {
                console.log(error);
                res.end('error');
            })
    }
    else if (req.url === '/anes') {
        getText('./06-app-test-server/anes.txt')
            .then((data) => {
                console.log(data);
                res.end(data);
            }).catch((error) => {
                console.log(error);
                res.end('error');
            })
    }
    else {
        res.end(`<p>Oops !</p>
            <a href="/">Back to home page</p>`)
    }
})

server.listen(5000);

// Using async await

let start = async (path) => {
    try {
        let text = await getText(path);
        console.log(text);
    }
    catch(error) {
        console.log('Error', error)
    }
}

start('./06-app-test-server/home.txt');
start('./06-app-test-server/anes.txt');

// util module ------------------------

console.log('--------------------------------');

let util = require('util');

let readFilePromise = util.promisify(fs.readFile);

readFilePromise('./06-app-test-server/home.txt', 'utf8')
  .then((data) => {
    console.log(data);
  })

// -------

let start02 = async () => {
    try {
        let home = await readFilePromise('./06-app-test-server/home.txt', 'utf8');
        let anes = await readFilePromise('./06-app-test-server/anes.txt', 'utf8');
        console.log('--------------------------------');
        console.log(home);
        console.log(anes);
    }
    catch(error) {
        console.log(error);
    }
}

start02();

// using the code
// let {readFile} = require('fs').promises;
// 
// is the same as using the code
// let {readFile} = require('fs');
// let readFilePromise = util.promisify(readFile);
// 
// same thing for writeFile
