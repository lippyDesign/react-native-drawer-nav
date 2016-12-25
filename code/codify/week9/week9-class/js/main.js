var newDiv = document.createElement('div');
var newHeader = document.createElement('h1');
var myLink = document.createElement('a');
myLink.setAttribute('href', 'https://www.tesla.com/');
var textHere = document.createTextNode('some text here');
var headerText = document.createTextNode('header text');
var myImage = document.createElement('img');
myImage.setAttribute('src', 'https://www.tesla.com/sites/default/files/images/blogs/p100d-announcement.jpg')
newDiv.appendChild(textHere);
newHeader.appendChild(headerText);

document.getElementById('addHere').appendChild(newHeader);
document.getElementById('addHere').appendChild(newDiv);
myLink.appendChild(myImage)
document.getElementById('addHere').appendChild(myLink);

document.getElementById('addHere').className = "theClass";
newHeader.className = "headerClass";