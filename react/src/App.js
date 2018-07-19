import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// context v1
// import Parent from './context/v1/Parent';
// import Article from './context/v2/Article';
import SoltContext from './soltContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <SoltContext />
      </div>
    );
  }
}

export default App;
