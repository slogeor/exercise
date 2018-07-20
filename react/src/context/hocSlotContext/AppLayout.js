import React from 'react';
import Slot from './Slot';
import SlotProvider from './SlotProvider'

class AppLayout extends React.Component {
  static displayName = 'AppLayout'
  render () {
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

export default SlotProvider(AppLayout)
