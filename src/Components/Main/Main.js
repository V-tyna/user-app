import React from 'react';
import './Main.css';
import Search from './Search/Search';
import UserList from './UserList/UserList';

const Main = (props) => {
    return (
        <div className='Main'>
            <input onChange={props.onInputChange} type="text" placeholder="Type something..."></input>
            <h3>Printed in input: {props.inputOutputInMain}</h3>
            <UserList usersList={props.usersList}/>
            <Search usersList={props.usersList}/>
        </div>
    )
}

export default Main;