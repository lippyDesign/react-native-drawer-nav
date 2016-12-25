var fs = require('fs'),
    http = require('http'),
    Transform = require('stream').Transform;

const basicTransform = new Transform({
    transform: function(chunk, encoding, next) {
        const text = chunk.toString();
        this.push(text.replace(/H/g, "J"));
        next();
    }
});

const server = http.createServer((req, res) => {
    const fileStream = fs.createReadStream('./documents/mydoc.txt');
    fileStream
        .pipe(basicTransform)
        .pipe(res)
});

server.listen(3000);