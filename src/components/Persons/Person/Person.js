import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import css from './Person.css';

class Person extends PureComponent {
  constructor(props) {
    super(props);

    console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Person.js]', nextProps);
  }

  componentDidUpdate() {
    console.log('[Person.js] Inside componentDidlUnmount()');
  }

  componentWillUnmount() {
    console.log('[Person.js] Inside componentWillUnmount()');
  }

  render() {
    console.log('[Person.js] Inside render()');

    return (
      <div className={css.Person}>
        <p>
          I{'\''}m a {this.props.name} and I am {this.props.age}
        </p>
        <button onClick={this.props.click}>Delete</button>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func,
};

Person.defaultProps = {
  name: 'john',
  age: '32',
  click: () => {},
  changed: () => {},
};

export default Person;
