//destructuring arrays
const compans = ['Google', 'Facebook', 'Uber', 'Yahoo', 'Intel'];
const [name, name2, ...rest] = compans;
name // will return Google
name2 // Will return Facebook
rest // Will return ['Uber', 'Yahoo', 'Intel']

//////////////////////////////////////////////////////////////////////////////////

const companies = [
  {name: 'Google', location: 'Mountain View'},
  {name: 'Facebook', location: 'Menlo Park'},
  {name: 'Uber', location: 'San Francisco'},
];

const [{location}] = companies;
location // will return Mountan View

//////////////////////////////////////////////////////////////////////////////////

const Google = {
	locs: ['Mountain View', 'New York', 'London']
};

const { locs: [loc] } = Google

loc

//////////////////////////////////////////////////////////////////////////////////

// the order of distructuring doesn't matter
function signup({username, email, password, city, dateOfBirth}) {
	// create new user
}

const user = {
	usename: 'myname',
  password: 'password',
  email: 'myemail@example.com',
  dateOfBirth: '1/1/1990',
  city: 'New York'
};

signup(user);

//////////////////////////////////////////////////////////////////////////////////

const points = [
	[4,5],
  [10,1],
  [0, 40]
];

points.map( ([x, y]) => {
	return {x, y};
});

//////////////////////////////////////////////////////////////////////////////////

const numbers = [1, 2, 3, 7, 45];
const doubles = [];

function double([ number, ...rest ]) {
  	if (!number) {
    	return doubles;
    } else {
    	doubles.push(number * 2);
    }
    return double(rest);
}

double(numbers);