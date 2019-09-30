import React, {Component} from 'react';
import Piece from './Piece';

function createGame(e) {
  e.preventDefault();
  e = document.querySelector('.game-piece')
}

class Board extends Component {
    render() {
        return (
        <Piece />,

        /* Need to replicate <Piece/> to make a 5x5 game board
        with the different retrieved this.state.text results 
        from Piece.js get request generated when the play button
        is clicked.  They should be evenly spaced throughout the
        visible window */
)
    };
}

export default Board;