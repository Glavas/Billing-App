import React from 'react';

const form = (props) => (
    <div className="forms">
        <form className="actualForm">
            <h2>{props.title}</h2>
            <p>Hallo {props.username}. {props.text}</p>
        </form>
    </div>
);

export default form;