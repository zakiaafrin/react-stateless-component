import React, { Component } from 'react';
import './App.css';   // style

const XYZ = (props) => {
  return <h1> I am a Stateless component</h1>
}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <XYZ />
      </div>
    );
  }
}
export default App;