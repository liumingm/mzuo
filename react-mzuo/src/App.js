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
        <Lunbo />
        <NowPlay />
      
      </div>
    );
  }
}

export default App;
