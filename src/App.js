import React from 'react';
import './App.css';
import PlayButton from './welcome-menu/PlayButton';
import Bible from './pictures/Bible';
import Welcome from './welcome-menu/Welcome';

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
      </header>
    </div>
  );
}

export default App;
