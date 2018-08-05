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
