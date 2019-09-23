import React from 'react';
import './App.css';
import PlayButton from './welcome-menu/PlayButton';
import Bible from './pictures/Bible';
import Welcome from './welcome-menu/Welcome';
import Piece from './gameboard/Piece';


function handleClick(e){
  e.preventDefault();
 console.log('The button was clicked')
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bible />
        <Welcome />
        <PlayButton />
        <Piece />
      </header>
    </div>
  );
}

export default App;
