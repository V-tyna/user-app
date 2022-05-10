import React from 'react';
import './User.css';

const User = (props) => {
    return (
   <li className='User'>Name: {props.name}, id: {props.id}</li>
    )
}

export default User;