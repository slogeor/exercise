"use strict";

var _dec, _class, _dec2, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// function doge (target) {
//   target.isDoge = true;
//   target.toString = () => {
//     console.log('toString');
//   }
// }

// @doge
// class Dog {}

// console.log(Dog.isDoge)
// Dog.toString();

function doge(isDoge) {
  console.log('argu:', arguments)
  return function (target) {
    target.isDoge = isDoge;
  };
}

var Dog = (_dec = doge(true),
  _dec(_class = function Dog() {
    _classCallCheck(this, Dog);
  }) || _class);


console.log(Dog.isDoge);
// true

var Human = (_dec2 = doge(false), _dec2(_class2 = function Human() {
  _classCallCheck(this, Human);
}) || _class2);

console.log(Human.isDoge);

