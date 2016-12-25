// for (var i = 1; i <=12; i++) {
//     var arr = []
//     arr.push(i)
//     for (var z = i*2; z <= i*12; z = z + i) {
//         arr.push(z)
//     }
//     console.log(arr.join(" "))
// }

// var resp = prompt('enter a number between 1 and 10')

// var total = 0;

// function rrrr(num) {
//     if (num > 0) {
//         total = total + Number(num);
//         return rrrr(num -1);
//     } else {
//         return console.log('total is: ' + total);
//     }
// }

// console.log(Math.floor(Math.random() * 10) + 1)

var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();

console.log(`time is ${hours} hours, ${minutes} minutes and ${seconds} seconds`);