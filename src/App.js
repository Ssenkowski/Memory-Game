import React from 'react';
import './App.css';
import Navigation from './containers/Navigation';

// function handleClick(e){
//   e.preventDefault();
//  console.log('The button was clicked')
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
       </header>
    </div>
  );
}

export default App;
