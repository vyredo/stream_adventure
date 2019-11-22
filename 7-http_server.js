
const http = require('http');
const fs = require('fs');
const through = require('through2');

function write(buffer, _ , next){
    console.log(buffer.toString())
    this.push(buffer.toString().toUpperCase())
    next();
}
function end(done){
    done();
}
const server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(through(write, end)).pipe(res);
        // req.pipe(fs.createWriteStream('post.txt'));
    }
});
server.listen(process.argv[2]);
