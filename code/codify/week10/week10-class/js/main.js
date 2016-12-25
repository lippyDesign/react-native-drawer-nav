var div = document.createElement("div");
var text = document.createTextNode("Hello World");
div.appendChild(text);
div.className = "myClass";
var image = document.createElement("img");
image.setAttribute('src', 'http://img.youtube.com/vi/lZd2ICU61Wg/hqdefault.jpg');
div.appendChild(image);
document.body.appendChild(div)

///////////////////////////////////

var num = 1
var obj = {text: 'hello'}
var bool = true
var arr = ['a', 'b', 'c', 'z', 'f', 'a', 'S']
var reveresed = arr
reveresed.reverse()

var numArray = [150, 230, 30, 1, 5, 4]

console.log(numArray.sort( (a, b) => a - b));

console.log(arr)
console.log(reveresed)
console.log(arr.sort())