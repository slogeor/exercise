
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

### 作用在类上面

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

### 参考文献

- [Decorators in ES7](https://zhuanlan.zhihu.com/p/20139834)
- [JS 装饰器（Decorator）场景实战](https://juejin.im/post/59f1c484f265da431c6f8940)
