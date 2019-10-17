import React from 'react';

function score(e) {
	e.preventDefault();
	console.log('The link was clicked')
}

export const ScoreButton = () =>  (
      <div>
          <button
            onClick={score}
            className="score-button"
            id="Score" 
            > Score </button>
      </div>
    );
    
    export default ScoreButton;