"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var blegh = 10;

var Person = function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
};

var person1 = new Person("WHOA");

console.log([blegh, person1]);