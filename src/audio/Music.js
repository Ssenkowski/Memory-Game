import React from 'react';

function music(e) {
	e.preventDefault();
	console.log('The link was clicked')
}

export const MusicButton = () =>  (
  <div> 
		<button 
		 onClick={music}
	   className="music-button" 
	> Music </button>
  </div>
);

export default MusicButton;