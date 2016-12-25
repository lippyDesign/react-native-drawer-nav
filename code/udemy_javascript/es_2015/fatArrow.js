const add = (a, b) => a + b;
add(1, 2);

const double = number => 2 * number
double(50);

const numbers = [1, 2, 3];
numbers.map(number => number * 2);

const team = {
  // fat arrow functions make use of lexical this,
  // (the placement of this term depends on how it is evaluated),
  // in other words this === team
	members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
  	return this.members.map( (member) => {
    	return `${member} is on team ${this.teamName}`;
    });
  }
};

team.teamSummary();