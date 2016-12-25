var computers = [
  {name: 'Apple', ram: 24},
  {name: 'Compaq', ram: 4},
  {name: 'Acer', ram: 32},
];

// Do all the computrs have at least 16 GB ram
computers.every(function(computer) {
	return computer.ram > 16;
});

// Do some of the computrs have at least 16 GB ram
computers.some(function(computer) {
	return computer.ram > 16;
});

var names = [
	"Alexandria",
  "Mathew",
  "Joe"
];

// Does every name have at least 4 letters?
names.every(function(name) {
	return name.length > 4;
});

// Does at least one name have at least 4 letters?
names.some(function(name) {
	return name.length > 4;
});

// validate usernames
function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
	return this.value.length > 0;
}

var username = new Field('2cool');
var password = new Field('my_password');
var birthday = new Field('10/10/2010');

var fields = [username, password, birthday];

var formIsValid = fields.every(function(field) {
	return field.validate();
});

if (formIsValid) {
	// allow user to submit
} else {
	// display error message
}