// STREAMS

let fs = require('fs');

for (let i = 0; i < 10000; i++) {
    fs.writeFileSync('./Content/big.txt', `
Hello World ${i}`, {flag: 'a'})
;}