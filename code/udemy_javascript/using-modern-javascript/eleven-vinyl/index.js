var vfs = require('vinyl-fs'),
    stream = require('stream'),
    fs = require('fs'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer');

const basicPlugin = new stream.Transform({
    objectMode: true,
    transform: function(file, encoding, next) {
        const contents = file.contents.toString();
        file.contents = new Buffer(contents + 'WHIAAAA');
        this.push(file);
        next();
    }
})

vfs.src('./src/**/*.js')
    .pipe(basicPlugin)
    .pipe(vfs.dest('./dist'));

fs.createReadStream('./docs/doc1.txt')
    .pipe(source('blahblahblah.txt'))
    .pipe(buffer())
    .pipe(basicPlugin)
    .pipe(vfs.dest('./dist'));