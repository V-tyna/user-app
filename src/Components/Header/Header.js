import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='Header'>
            <h1>User App Title</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home page</a>
                    </li>
                    <li>
                        <a href="/about">About page</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;