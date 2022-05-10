import React from 'react';
import './Main.css';
import Section from './Section/Section';
import UserList from './UserList/UserList';

const Main = (props) => {
    return (
        <div className='Main'>
            <input onChange={props.onInputChange} type="text" placeholder="Type something..."></input>
            <h3>Printed in input: {props.inputOutputInMain}</h3>
            <UserList usersList={props.usersList}/>
            <Section />
        </div>
    )
}

export default Main;