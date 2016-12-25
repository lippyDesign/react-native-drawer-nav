var users = [
  {name: 'Jill'},
  {name: 'Alex'},
  {name: 'Bill'}
];

users.find(function(user) {
	return user.name === 'Alex';
});

function Car(model) {
  this.model = model
}

var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
];

cars.find(function(car) {
	return car.model === 'Focus';
});

var posts = [
  {id: 1, title: 'New Post'},
  {id: 2, title: 'Old Post'}
];

var comment = {postId: 1, content: 'Great Comment'}

function postForComment(posts, comment) {
  return posts.find(function(post) {
  	return post.id === comment.postId;
  });
}

postForComment(posts, comment);

// the following is not the best way but works:
var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

function findWhere(array, criteria) {
  var prop = Object.getOwnPropertyNames(criteria)[0]
  var propValue = criteria[prop];
  return array.find(function(item) {
  	return item[prop] === propValue
  });
}

findWhere(ladders, { height: 25 });
