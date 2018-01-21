import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cockpit.css';

const cockpit = props => (
  <div>
    <h1>Hi, I&apos;m a React App</h1>
    <button onClick={props.clicked} className={styles.Button}>Toggle Persons</button>
  </div>
);

cockpit.propTypes = {
  clicked: PropTypes.func,
};

cockpit.defaultProps = {
  clicked: () => { },
};

export default cockpit;
