### 构建构建
- [Create React App](https://github.com/facebookincubator/create-react-app)


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

### 新版 API

**React.createContext**

```js
const ThemeContext = React.createContext({
  background: '#green',
  color: '#FF5000'
});
```

**Provider**

```js
<ThemeContext.Provider value={{background: '#green', color: '#FF5000'}}>
  <Header />
</ThemeContext.Provider>
````

**Consumer**

```js
  <ThemeContext.Consumer>
    {context => (
      <h1 style={{background: context.background, color: context.color}}>
        {this.props.children}
      </h1>
    )}
  </ThemeContext.Consumer>
```

### 总结

- 相比props和state，React的Context可以实现跨层级的组件通信。
- Context API的使用基于生产者消费者模式。生产者一方，通过组件静态属性childContextTypes声明，然后通过实例方法getChildContext()创建Context对象。消费者一方，通过组件静态属性contextTypes申请要用到的Context属性，然后通过实例的context访问Context的属性。
- 使用Context需要多一些思考，不建议在App中使用Context，但如果开发组件过程中可以确保组件的内聚性，可控可维护，不破坏组件树的依赖关系，影响范围小，可以考虑使用Context解决一些问题。
- 通过Context暴露API或许在一定程度上给解决一些问题带来便利，但个人认为不是一个很好的实践，需要慎重。
- 旧版本的Context的更新需要依赖setState()，是不可靠的，不过这个问题在新版的API中得以解决。
- 可以把Context当做组件的作用域来看待，但是需要关注Context的可控性和影响范围，使用之前，先分析是否真的有必要使用，避免过度使用所带来的一些副作用。
- 可以把Context当做媒介，进行App级或者组件级的数据共享。
- 设计开发一个组件，如果这个组件需要多个组件关联组合的，使用Context或许可以更加优雅。

### 参考文献

- [https://juejin.im/post/5a90e0545188257a63112977](https://juejin.im/post/5a90e0545188257a63112977)
