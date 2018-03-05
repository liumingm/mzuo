import React, { Component } from 'react';
import Header from './component/Header'
import Lunbo from './component/Lunbo'
import NowPlay from './component/NowPlay'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="qqq">
        <Lunbo />
        <NowPlay />
        </div>
      </div>
    );
  }
}

export default App;
