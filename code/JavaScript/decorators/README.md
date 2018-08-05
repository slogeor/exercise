
### 装饰器

#### 作用在方法上

先看一个栗子

```js
class Dog {
  @readonly
  bark () {
    return 'wang!wang!'
  }
}

let dog = new Dog()
dog.bark = 'bark!bark!'
// Cannot assign to read only property 'bark' of [object Object]
```

`class Dog` ES6 代码转换成 ES5 是这样的。

```js
// 步骤 1
function Dog () {}

// 步骤 2
Object.defineProperty(Dog.prototype, 'bark', {
  value: function () { return 'wang!wang!' },
  enumerable: false,
  configurable: true,
  writable: true
})
```


`readonly` 函数的返回值

```js
target: Dog {}
key: bark
descriptor: {
	value: [Function: bark],
  writable: false,
  enumerable: false,
  configurable: true
}
```

对 bark 方法应用 @readonly 之后，JS 引擎就会在进行步骤二之前调用这个 decorator：

```js
let descriptor = {
  value: function () { return 'wang!wang!' },
  enumerable: false,
  configurable: true,
  writable: true
}

// decorator 接收的参数与 Object.defineProperty 一致
descriptor = readonly(Dog.prototype, 'bark', descriptor) || descriptor
Object.defineProperty(Dog.prototype, 'bark', descriptor)
```

#### 作用在类上面

如果把一个 decorator 作用到类上，则它的第一个参数 target 是类本身。

```js
// 这里的 `target` 是类本身
function doge (target) {
  target.isDoge = true
}

@doge
class Dog {}

console.log(Dog.isDoge)
// true
```

### 定义

- 动态地将责任附加到对象上.若要扩展功能,装饰者提供了比继承更有弹性的替代方案。
- 它是通过创建一个包装对象，也就是装饰来包裹真实的对象。

### 优点

- Decorator模式与继承关系的目的都是要扩展对象的功能，但是Decorator可以提供比继承更多的灵活性。
- 通过使用不同的具体装饰类以及这些装饰类的排列组合，设计师可以创造出很多不同行为的组合。

### 缺点

- 这种比继承更加灵活机动的特性，也同时意味着更加多的复杂性。
- 装饰模式会导致设计中出现许多小类，如果过度使用，会使程序变得很复杂。
- 装饰模式是针对抽象组件（Component）类型编程。但是，如果你要针对具体组件编程时，就应该重新思考你的应用架构，以及装饰者是否合适。当然也可以改变Component接口，增加新的公开的行为，实现“半透明”的装饰者模式。在实际项目中要做出最佳选择。

### 应用场景

- 需要扩展一个类的功能，或给一个类添加附加职责。
- 需要动态的给一个对象添加功能，这些功能可以再动态的撤销。
- 需要增加由一些基本功能的排列组合而产生的非常大量的功能，从而使继承关系变的不现实。
- 当不能采用生成子类的方法进行扩充时。一种情况是，可能有大量独立的扩展，为支持每一种组合将产生大量的子类，使得子类数目呈爆炸性增长。另一种情况可能是因为类定义被隐藏，或类定义不能用于生成子类。

### 参考文献

- [Decorators in ES7](https://zhuanlan.zhihu.com/p/20139834)
- [JS 装饰器（Decorator）场景实战](https://juejin.im/post/59f1c484f265da431c6f8940)
- [装饰（Decorator）](https://www.cnblogs.com/hammerc/p/4743790.html)
