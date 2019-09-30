import React, { Component } from 'react'
import axios from 'axios'

function flipPiece(e) {
  e.preventDefault();
  e = document.querySelector('.game-piece')
  e.style.backgroundColor = "aliceblue";
  }

class Pieces extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pieces: []
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
    console.log(this.state)
    return(
  <div className="live-board">
    <div onClick={flipPiece} className="game-piece" >
     </div>
  </div>)
};}

export default Pieces;