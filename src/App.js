import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>

        <Person age="32">
          My hobbies: swimming
        </Person>
        <Person age="21" />
      </div>
    );
  }
}

export default App;
