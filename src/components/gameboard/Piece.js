import React from 'react'
// import { functionDeclaration } from '@babel/types';


const Pieces = (props) => (
  <div className="live-board">
  {props.pieces.map((piece) => 
  <div key={piece.id} className="game-piece" alt={'unflipped'}>
    <button> {piece.text} {piece.id} </button>
   </div>
   )}
</div>);

export default Pieces;
// function flipPiece(e) {
//   // e.preventDefault();
//   e = document.querySelector('.game-piece')
//   e.style.backgroundColor = "aliceblue";
//   e.setAttribute('alt', 'flipped')
//   let b = document.querySelectorAll('button.game-piece')
//   console.log(b)
//   }

  // function unFlipPiece(e) {
  //   e.preventDefault();
  //   e = document.querySelector('.game-piece')
  //   e.style.backgroundColor = "darkslategrey";
  //   e.property.attribute = "";
  // }

// class Pieces extends Component {
//   constructor(props){
//     super(props);
//     this.state = { match: false, notAMatch: false, flippedPieces: []};
// }


// // showText() {
// //   if ( piece.alt === "flipped") {
// //     <p>{piece.text}</p>
// //   }
// // }
//   render() {
//     let pieces = this.props.pieces
    
//     return(
//       <div className="live-board">
//         {pieces.map((piece) => 
//         <div key={piece.id} className="game-piece" alt={'unflipped'}>
//           <button onClick={flipPiece}> {piece.text} {piece.id} </button>
//          </div>
//          )}
//       </div>)
// };}

