import React from 'react';

function sounds(e) {
	e.preventDefault();
	console.log('The link was clicked')
}

export const SoundsButton = () =>  (
  <div> 
		<button 
		 onClick={sounds}
	   className="sounds-button" 
	> Sounds </button>
  </div>
);

export default SoundsButton;