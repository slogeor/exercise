import React, { Component } from 'react';
import PropTypes from 'prop-types';

// class Child extends Component {
//   // 声明需要使用的 context 属性
//   static contextTypes = {
//     propA: PropTypes.string
//   }

//   render() {
//     const { propA } = this.context;
//     console.log(this.context)
//     return (
//       <div>propA: {propA}</div>
//     );
//   }
// }

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
