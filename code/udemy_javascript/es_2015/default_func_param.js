// Default function parameters
// if the user did not pass in method (or method is undefined),
// method will assumed to be 'GET'
function makeAjaxRequest(url, method = 'GET') {
  return method;
  // logic to make the request
}

// so the following will be automatically assigned to 'GET'
makeAjaxRequest('google.com');

// so the following will return 'POST' since we provided it
makeAjaxRequest('google.com', 'POST');

// if you need the initial value to have no value use null,
// no reassigning will happen
makeAjaxRequest('google.com', null);

/////////////////////////////////////////////////////////////////////////////////

function User(id) {
  this.id = id;
}

function generateId() {
	return Math.random() * 9999999;
}

function createAdminUser(user = new User(generateId())) {
	user.admin = true;
  return user;
}

createAdminUser();