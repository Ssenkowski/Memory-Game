import React, {Component} from 'react';
import Piece from './Piece';
import axios from 'axios';


function createGame(e) {
  e.preventDefault();
  e = document.querySelector('.game-piece')
}

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pieces: [],
      match: false,
      notAMatch: false

    }
  }

  getPieces() {
    axios.get('/api/v1/cards')
    .then(response => {
      this.setState({pieces: response.data})
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getPieces()
  }

    render() {
        return (
        <Piece pieces={this.state.pieces} match={this.state.match} notAMatch={this.state.notAMatch} />
        /*Pass prop notaMatch or match! to <Piece/>.  if notaMatch
        reset piece to isFlipped: false else  add points to scoreboard 
          */
        /* Need to replicate <Piece/> to make a 5x5 game board
        with the different retrieved this.state.text results 
        from Piece.js get request generated when the play button
        is clicked.  They should be evenly spaced throughout the
        visible window */
      )
    };
}

export default Board;