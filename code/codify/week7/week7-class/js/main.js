// // print to the console
// console.log('hello world')
// // write to the document (print to the screen)
// document.write('hello world')
// // alert
// alert('hello world')
// // ask user input and assign in to a var
// var username = prompt('what is your name?')
// console.log(username)
var one = 1000000
var age = 29
var height = 70
console.log(one, age, height, "Hola amigos")
document.write(one)
var trueVar = true
var falseVar = false
console.log(trueVar, falseVar)
var three = "this is a beautiful string"
var mixArray = ['mix', 5, true]
if (2 > 1) {
    console.log('great great great')
}
var num1 = 5
var num2 = 5
if (num1 == num2) {
    console.log('the numbers are equal')
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const myArray = ['uno', 'dos', 'tres']
console.log(myArray)
myArray.forEach( current => console.log(current))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const username = 'myUsername'
const password = 'myPassword'
const userAge = '28'
const userPhone = '510-555-5555'
const userLocation = '95050'
const arrayToCheck = [username, password, userAge, userPhone, userLocation]
const trueOrNot = arrayToCheck.every(item => item.trim() === true)
console.log(trueOrNot)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// else if condition

var numberValue = 12
var numberValue2 = Number(prompt('choose a number betwee 1 and 100'))

if (numberValue > numberValue2) {
    console.log(numberValue + ' is grater than ' + numberValue2)
} else if (numberValue < numberValue2) {
    console.log(numberValue2 + ' is grater than ' + numberValue)
} else {
    console.log('they are equal')
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

for(var i = 0; i <=20; i++) {
    console.log(i)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
