import React from 'react';
import './Main.css';
import Section from './Section/Section';

const Main = (props) => {
    console.log(props);
    return (
        <div className='Main'>
            <input onChange={props.onInputChange} type="text" placeholder="Type something..."></input>
            <h3>Printed in input: {props.inputOutputInMain}</h3>
            <Section />
        </div>
    )
}

export default Main;