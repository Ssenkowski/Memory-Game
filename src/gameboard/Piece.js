import React from 'react';

function flipPiece(e) {
  e.preventDefault();
  e = document.querySelector('.game-piece')
  e.style.backgroundColor = "aliceblue";
  e.innerHTML = "Isaiah 35:10"
}

export const Piece = () =>  (
  <div className="live-board">
    <div onClick={flipPiece} className="game-piece" > </div>
  </div>
);

export default Piece;