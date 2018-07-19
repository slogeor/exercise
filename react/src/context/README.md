
### 如何使用Context

如果要Context发挥作用，需要用到两种组件，一个是Context生产者(Provider)，通常是一个父节点，另外是一个Context的消费者(Consumer)，通常是一个或者多个子节点。

对于父组件，也就是Context生产者，需要通过一个静态属性childContextTypes声明提供给子组件的Context对象的属性，并实现一个实例getChildContext方法，返回一个代表Context的纯对象 (plain object) 。

子组件需要通过一个静态属性contextTypes声明后，才能访问父组件Context对象的属性，否则，即使属性名没写错，拿到的对象也是undefined

**Parent**

```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Middle from '../Middle';

class Parent extends Component {
  // 声明 context 对象属性
  static  childContextTypes = {
    propA: PropTypes.string
  }
  // 返回 context 对象
  getChildContext() {
    return {
      propA: 'this is a context'
    }
  }
  render() {
    return (
      <Middle />
    )
  }
}
export default Parent;
```

**Child 无状态**
```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Child = (props, context) => {
  const { propA } = context;
  console.log(context);
  return (
    <div>propA: {propA}</div>
  )
}

// 无状态组件生命 context 属性
Child.contextTypes = {
  propA: PropTypes.string
}
export default Child;
```

**Child有状态组件**
```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Child extends Component {
  // 声明需要使用的 context 属性
  static contextTypes = {
    propA: PropTypes.string
  }

  render() {
    const { propA } = this.context;
    console.log(this.context)
    return (
      <div>propA: {propA}</div>
    );
  }
}
export default Child;
```

### 参考文献

- [https://juejin.im/post/5a90e0545188257a63112977](https://juejin.im/post/5a90e0545188257a63112977)
