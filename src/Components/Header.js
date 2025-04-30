import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <div className='header'>
            <div className='header-container'>
                <Link to='game-tools'>Game Tools</Link>
            </div>
        </div>
    );
}

export default Header;