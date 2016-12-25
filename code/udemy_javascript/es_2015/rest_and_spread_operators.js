// Rest Operator ...numbers says that there is some unknown number of arguments,
// I want to capture all of the arguments and put them all into an array
function addNumbers(...numbers) {
	return numbers.reduce( (total, number) => total + number, 0);
}

addNumbers(1,2,3,4,5,6,7);


/////////////////////////////////////////////////////////////////////////////////


// Spread Operator will flatten an array
// also u can add new elements while flattening
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

['blue', 'gree', ...defaultColors, ...userFavoriteColors, ...fallColors];


//////////////////////////////////////////////////////////////////////////////////


function validateShoppingList(...items) {
	if (items.indexOf('milk') < 0) {
  	return ['milk', ...items];
  }
  return items
}

validateShoppingList('oranges', 'bread', 'eggs');

//////////////////////////////////////////////////////////////////////////////////


const MathLibrary = {
	calculateProduct(...rest) {
    return this.multiply(...rest);
  },
  multiply(a, b) {
  	return a * b;
  }
};