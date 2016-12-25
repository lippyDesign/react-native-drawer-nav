// var name = prompt("What is your name?")
// if (name.toLowerCase() === "alice" || name.toLowerCase() === "bob") {
//     var message = "Hello " + name + ", you are awesome!"
//     document.getElementById('message').innerHTML = message
// } else {
//     var message = name + ", you stink!"
//     document.getElementById('message').innerHTML = message
// }

// console.log(document.getElementById('header').textContent);

// document.getElementById('ddd').innerHTML = "<h2>This is header Two</h2>"

// function myFunction() {
//     var x = document.getElementById('myList').textContent
//     document.getElementById('demo').textContent = x
// }
// myFunction()
// function mySecondFunction() {
//     document.getElementById('hOne').textContent = "Some Text"
//     document.getElementById('demoTwo').innerHTML = "<div>New Div</div>"
// }
// mySecondFunction()

function getInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    console.log(username)
    console.log(password)
}
function getUserAnswer() {
    var userAnswer = document.getElementById('userCar').value
    document.getElementById('userCarAnswer').innerHTML = userAnswer
}
var cars = ['acura', 'bmw']

var numArray = [1, 5, 3, 2, 7, 2, 5]
var biggestNum = 0;
for (var i = 0; i < numArray.length; i++) {
    console.log(numArray[i])
    if (numArray[i] > biggestNum) {
        biggestNum = numArray[i]
    }
}
console.log("biggest: " + biggestNum)

var carObject = {
    make: 'fiat',
    year: 2010,
    purchased: false
};