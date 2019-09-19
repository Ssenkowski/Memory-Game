import React from 'react';

function flipPiece(e) {
	e.preventDefault();
	console.log('The link was clicked')
}

export const Piece = () =>  (
  <div> 
		<button 
	    onClick={flipPiece}
        className="game-piece"
        id=""
        > Isaiah 35:10 </button>
  </div>
);

export default Piece;