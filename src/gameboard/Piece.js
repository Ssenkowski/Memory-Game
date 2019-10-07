import React, { Component } from 'react'
import axios from 'axios'

function flipPiece(e) {
  e.preventDefault();
  e = document.querySelector('.game-piece')
  e.style.backgroundColor = "aliceblue";
  
  }

class Pieces extends Component {
  render() {
  
    let pieces = this.props.pieces
    
    return(
      <div className="live-board">
        {pieces.map((piece) => 
        <div key={piece.id} onClick={flipPiece} className="game-piece" >
          <p> {piece.text} </p>
         </div>
         )}
      </div>)
};}

export default Pieces;