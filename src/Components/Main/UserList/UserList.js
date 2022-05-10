import React from 'react';
import './UserList.css';
import User from './User/User';

const UserList = (props) => {
    return (
        <div className='UserList'>
            <ul>
                <strong>User list:</strong>
                {props.usersList.map((user) => {
                        return (
                        <User 
                            key={user.id}
                            name={user.name}
                            id={user.id}
                        />)
                    })
                }
            </ul>
        </div>
    )
}

export default UserList;