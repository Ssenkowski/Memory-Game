import React from 'react';

function play(e) {
	e.preventDefault();
	console.log('The link was clicked')
}

export const PlayButton = () =>  (
      <div>
          <button
            onClick={play}
            className="play-button"
            id="Play" 
            > Play </button>
      </div>
    );
    
    export default PlayButton;