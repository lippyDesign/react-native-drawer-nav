var fs = require('fs');

const reader = fs.createReadStream('./documents/mydoc.txt');

let fileContents = "";

// on is a way to attach event handler in most node API
reader.on("data", data => {
    fileContents += data;
});

reader.on("end", () => {
console.log(`data found ${fileContents}`);
});