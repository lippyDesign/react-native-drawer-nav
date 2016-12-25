// function loopOver10(action) {
//     for (var i = 0; i < 10; i++) {
//         action(i)
//     }
// }

// loopOver10(function(number){
//     console.log(number)
// });

// loopOver10(number => console.log(number));

const obj = {
    name: "Vova",
    showName() {
        console.log(`My name is ${this.name}`);
        setTimeout(() => {
            console.log(`My name is still ${this.name}`);
        }, 1000)
    }
}
obj.showName();