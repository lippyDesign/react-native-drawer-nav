var stream = require('stream');

const source = new stream.Readable({
    objectMode: true
});

source.push({name: "Vova"});
source.push({name: "Oleg"});
source.push(null);

const dest = new stream.Writable({
    objectMode: true,

    write: function(chunk, encoding, next) {
        console.log(`writing ${chunk.name}`);
        next();
    }
});

const transform = new stream.Transform({
    objectMode: true,

    transform: function(chunk, encoding, next) {
        chunk.name = `NOT ${chunk.name}`
        this.push(chunk);
        next();
    }
})

source.pipe(transform).pipe(dest);
