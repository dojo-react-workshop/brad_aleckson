import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Voting from './Voting.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Vote Your JS Library</h2>
        </div>
        <Voting />
      </div>
    );
  }
}

export default App;
