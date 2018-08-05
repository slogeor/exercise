function readonly(target, key, descriptor) {
  descriptor.writable = false;
  console.log('target:', target);
  console.log('key:', key);
  console.log('descriptor:', descriptor);
  return descriptor
}

class Dog {
  @readonly
  bark () {
    return 'wang!wang!'
  }
}

let dog = new Dog();
console.log(dog.bark());

// dog.bark = 'bark!bark!'
