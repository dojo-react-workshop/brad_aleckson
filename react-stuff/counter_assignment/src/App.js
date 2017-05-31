import React, { Component } from 'react';
import Container from './Container.js';

class App extends Component {
  render() {
    return (
      <div className="App" style={{textAlign:'center', margin:'35px',fontFamily:'Arial,Helvetica, sans-serif'}}>        
        <Container/>
      </div>
    );
  }
}

export default App;
