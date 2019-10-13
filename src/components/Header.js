import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <li><Link to='/'>Welcome</Link></li>
                <li><Link to='/game'>Play</Link></li>
                <li><Link to='/scoreboard'>Score Board</Link></li>
            </nav>
        </div>
    )
}

export default Header;