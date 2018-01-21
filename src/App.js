import React, { Component } from 'react';
import styles from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asda1', name: 'Jacek', age: 18 },
      { id: 'czxcz12', name: 'Pati', age: 16 },
      { id: 'dasd334dfds', name: 'Jarek', age: 49 },
    ],
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { id: 'asda1', name: newName, age: 69 },
        { id: 'czxcz12', name: 'Patrycja', age: 16 },
        { id: 'dasd334dfds', name: 'Jarek', age: 49 },
      ],
      showPersons: false,
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  }

  togglePersonsHangler = () => {
    const currentState = this.state.showPersons;
    this.setState({
      showPersons: !currentState,
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => (<Person
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              name={person.name}
              age={person.age}
              changed={event => this.nameChangedHandler(event, person.id)}
            />
            ))
          }
        </div>
      );
    }

    return (
      <div className={styles.App}>
        <h1>Hi, I{'\''}m a React App</h1>
        <button
          onClick={this.togglePersonsHangler}
          className={styles.Button}
        >
          Toggle Persons
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
