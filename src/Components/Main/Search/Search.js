import React, { useState } from 'react';
import './Search.css';

const Search = (props) => {
    const users = props.usersList;
    const [searchParam, setSearchParam] = useState('');
    return (
        <div className='Search'>
            <input type="text" placeholder="Search..." onChange={(e) => setSearchParam(e.target.value)}></input>
            { searchParam &&
                users.filter((val) => {
                    if(searchParam === ""){
                        return val;
                    } else if(val.name.toLowerCase().includes(searchParam.toLocaleLowerCase())){
                        return val
                    } else {
                        return null;
                    }
                }).map((user) => {
                    return (
                        <div key={user.id}>
                           <p>{user.name}</p> 
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Search;