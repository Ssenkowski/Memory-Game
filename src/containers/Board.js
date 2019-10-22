import React, {Component} from 'react';
import Piece from '../components/gameboard/Piece';
import axios from 'axios';


// function createGame(e) {
//   e.preventDefault();
//   e = document.querySelector('.game-piece')
// }

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pieces: [],
      match: false,
      notAMatch: false,
      user: []
    }
  }

  getPieces() {
    axios.get('/api/v1/cards')
    .then(response => {
      this.setState({pieces: response.data})
    })
    .catch(error => console.log(error))
  }


  getUser() {
    axios.get('/api/v1/users')
    .then(response => {
      this.setState({user: response.data})
    })
    .catch(error => console.log(error))
  }

  // getUser() {
  //   fetch('/api/v1/users')
  //   .then(response => response.json())
  //   .then(data => {this.setState({user: data.user})
  //   console.log(data.user)
  //   })
  //   .catch(error => console.log(error))
  // }
  componentDidMount() {
    this.getPieces();
    this.getUser()
  }

  flipPiece(e) {
    // e.preventDefault();
    e = document.querySelector('.game-piece')
    e.style.backgroundColor = "aliceblue";
    e.setAttribute('alt', 'flipped')
    let b = document.querySelectorAll('button.game-piece')
    console.log(b)
    }
  

Match() {
  this.setState({match: true})
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