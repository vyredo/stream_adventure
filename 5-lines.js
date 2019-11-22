const split = require('split');
const through2 = require('through2');

let linenumber = 0;

process.stdin
.pipe(split())
    .pipe(through2(function (line, _, next) {
        linenumber++
        if(linenumber % 2 === 0) {
            this.push(line.toString().toUpperCase())
        } else {
            this.push(line.toString())
        }
        next();
    }, function end(done){
        done();
    }))
    .pipe(process.stdout)