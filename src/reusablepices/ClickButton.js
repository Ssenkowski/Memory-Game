import React from 'react';

function name(e) {
	e.preventDefault();
	console.log('The link was clicked')
}

export const ClickButton = () =>  (
  <div> 
		<button 
		    onClick={buttonName}
        className="click-button"
        id=""
        > ... </button>
  </div>
);

export default ClickButton;