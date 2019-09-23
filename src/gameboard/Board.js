import React, {Component} from 'react';
import Piece from './Piece';

function createGame(e) {
  e.preventDefault();
  e = document.querySelector('.game-piece')
}

class Board extends Component {
    render() {
        return <Piece /> ;
    };
}

export default Board;