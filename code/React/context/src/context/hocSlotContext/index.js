import React from 'react';
import AppLayout from './AppLayout';
import AddOn from './AddOn';

class HocSlotContext extends React.Component {
  render() {
    return(
      <AppLayout>
        <AddOn slot="header">
          <h1>这里可能是一个页面header@hoc</h1>
        </AddOn>
        <AddOn>
          <p>主要内容的一个段落。</p>
          <p>另一个段落。</p>
        </AddOn>
        <AddOn slot="footer">
          <p>这里可能是一个页面footer</p>
        </AddOn>
      </AppLayout>
    )
  }
}

export default HocSlotContext;
