const concat = require('concat-stream');
const http = require('http');

process.stdin
    .pipe(concat(function (body){
        const result = body.toString().split('').reverse();
        return process.stdout.write(result.join(''))
    }))
    // .pipe(process.stdout)