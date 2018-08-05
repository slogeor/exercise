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

//================================================


function doge (isDoge) {
  return function(target) {
    target.isDoge = isDoge
  }
}

@doge(true)
class Dog {}

console.log(Dog.isDoge)
// true

@doge(false)
class Human {}
console.log(Human.isDoge)
