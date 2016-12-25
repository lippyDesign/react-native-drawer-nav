var numbers = [10, 20, 30];

// we pass a second argument to reduce, which is the initial value,
// the initial value will be sent to the iteration function for every run through
numbers.reduce(function (sum, value) {
	return sum + value;
}, 0);

var primaryColors = [
  {color: 'red'},
  {color: 'yellow'},
  {color: 'blue'}
];

// default value (second argument) is an empty array,
// since we want to end up with an array, i.e. ['red', 'yellow', 'blue']
primaryColors.reduce(function(previous, primaryColor) {
	previous.push(primaryColor.color);
  return previous;
}, []);

//////////////////////////////////////////////////////////////////

/* 

balanced parentacies
"()()()()"
"(((())))"

unbalanced parentacies
"))))()"
")("

*/

// function that determines if parentacies are balanced
// for this function we'll add one for opening paren and subtract one for closing paren
function balancedParens(string) {
  return !string.split("").reduce(function(previous, char) {
    // catch ')(' case, if we go into negative, clearly unbalanced
    if (previous < 0) {return previous; }
  	if (char === "(") {return ++ previous;}
    if (char === ")") {return -- previous;}
    // catch all other cases, i.e. "wbpw;bwlsblkbrv"
    return previous;
  }, 0);
}

balancedParens('()');
/////////////////////////////////////////////////////////////////////////////////

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(prev, desk) {
    if (desk.type === 'sitting') {
      prev.sitting += 1;
      return prev
    } else {
      prev.standing += 1;
      return prev
    }
}, { sitting: 0, standing: 0 });