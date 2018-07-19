import React from 'react';
import PropTypes from 'prop-types';
import Slot from './Solt';

class AppLayout extends React.Component {

  static childContextTypes = {
    requestAddOnRenderer: PropTypes.func
  }

  // 用于缓存每个<AddOn />的内容
  addOnRenderers = {}

  // 通过Context为子节点提供接口
  getChildContext () {
    const requestAddOnRenderer = (name) => {
      if (!this.addOnRenderers[name]) {
        return undefined
      }
      return () => (
        this.addOnRenderers[name]
      )
    }

    return {
      requestAddOnRenderer
    }
  }

  render () {
    const { children } = this.props;
    console.log('children:', children)
    if (children) {
      // 以k-v的方式缓存<AddOn />的内容
      const arr = React.Children.toArray(children);

      const nameChecked = [];
      this.addOnRenderers = {};

      arr.forEach(item => {
        const itemType = item.type;
        if (itemType.displayName === 'AddOn') {
          const slotName = item.props.slot || '$$default';
          // 确保内容唯一性
          if (nameChecked.indexOf(slotName) !== -1) {
            throw new Error(`Slot(${slotName}) has been occupied`)
          }
          this.addOnRenderers[slotName] = item.props.children
          nameChecked.push(slotName);
        }
      })
    }
    console.log(this.addOnRenderers)

    return (
      <div>
        <header>
          <Slot name="header"></Slot>
        </header>
        <main>
          <Slot></Slot>
        </main>
        <footer>
          <Slot name="footer"></Slot>
        </footer>
      </div>
    )
  }
}

export default AppLayout;
