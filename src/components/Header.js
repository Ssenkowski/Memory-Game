import React from 'react';
import {Link} from 'react-router-dom';
// import Button from '../containers/welcome-menu/Button';
// import ScoreboardButton from '../containers/welcome-menu/ScoreboardButton';


// function play(e) {
// 	e.preventDefault();
//     e = document.querySelector('.play-button').innerHTML = "Play"
// }

// function scoreboard(e) {
// 	e.preventDefault();
//     e = document.querySelector('.score-button').innerHTML = "Scoreboard"
// }

const Header = () => {
    return (
        <div>
            <nav>
                <Link to='/user'>Create a User</Link>
                <br></br>
                <Link to='/game'>Play</Link>
                <br></br>
                <Link to='/scoreboard'>Scoreboard</Link>
                <br></br>
                <Link to='/profile'>Profile</Link>
            </nav>
        </div>
    )
}

export default Header;