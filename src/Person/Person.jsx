import React from 'react';
import PropTypes from 'prop-types';
import './Person.css';

const person = props => (
  <div className="Person">
    <p>
      I{'\''}m a {props.name} and I am {props.age}
    </p>
    <button onClick={props.click}>Delete</button>
    <input type="text" onChange={props.changed} value={props.name} />
  </div>
);

person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
};

person.defaultProps = {
  name: 'john',
  age: '32',
  click: () => {},

};

export default person;
