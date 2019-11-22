var trumpet = require('trumpet');
var fs = require('fs');
var tr = trumpet();
const through = require('through2')

var stream = tr.select('.loud').createStream();
stream.pipe(through(
    function write(buffer, _ , next){
        this.push(buffer.toString().toUpperCase())
        next();
    }, 
    function write(done){
        done()
    })
)
.pipe(stream)

process.stdin.pipe(tr).pipe(process.stdout)