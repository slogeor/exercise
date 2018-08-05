'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  console.log('argu:', arguments)
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    console.log('key:', key)
    desc[key] = descriptor[key];
  });
  console.log('-----')
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;
  console.log('desc:', desc)
  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);
  console.log('desc:', desc)
  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function readonly(target, key, descriptor) {
  descriptor.writable = false;
  console.log('target:', target);
  console.log('key:', key);
  console.log('descriptor:', descriptor);
  return descriptor;
}

var Dog = (_class = function () {
  function Dog() {
    _classCallCheck(this, Dog);
  }

  _createClass(Dog, [{
    key: 'bark',
    value: function bark() {
      return 'wang!wang!';
    }
  }]);

  return Dog;
}(), (_applyDecoratedDescriptor(_class.prototype, 'bark', [readonly], Object.getOwnPropertyDescriptor(_class.prototype, 'bark'), _class.prototype)), _class);


var dog = new Dog();
console.log(dog.bark());

// dog.bark = 'bark!bark!'

