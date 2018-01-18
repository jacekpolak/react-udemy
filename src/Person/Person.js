import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person" onClick={props.click}>
            <p>
                I'm a {props.name} and I am {props.age}
            </p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;