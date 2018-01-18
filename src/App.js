import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asda1', name: 'Jacek', age: 18 },
      { id: 'czxcz12', name: 'Pati', age: 16 },
      { id: 'dasd334dfds', name: 'Jarek', age: 49 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { id: 'asda1', name: newName, age: 69 },
        { id: 'czxcz12', name: 'Patrycja', age: 16 },
        { id: 'dasd334dfds', name: 'Jarek', age: 49 }
      ],
      showPersons: false
    })
  }

  togglePersonsHangler = () => {
    const currentState = this.state.showPersons
    this.setState({
      showPersons: !currentState
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const styles = {
      backgroundColor: 'white',
      fony: 'inherit',
      border: '1px blue solid',
      padding: '8px'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
           return <Person
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              name={person.name}
              age={person.age}
            />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        
        <button 
          onClick={this.togglePersonsHangler}
          style={styles}
        >
          Switch Name
        </button>

        {persons}
       
      </div>
    );
  }
}

export default App;
