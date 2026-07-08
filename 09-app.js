// STREAMS

const { error } = require('console');
let fs = require('fs');

let stream = fs.createReadStream('/Content/big.txt',
    { highWaterMark: 90000,
     encoding: 'utf8'});

stream.on('data', (chunk) => {
    console.log(chunk);
});

stream.on('end', () => {
    console.log('Stream Finished !');
});

stream.on('error', (err) => {
    console.error('Stream error: ', err);
});