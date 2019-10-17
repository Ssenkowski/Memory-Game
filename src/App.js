import React from 'react';
import './App.css';
import Bible from './pictures/Bible';
import Header from './components/Header';
import Main from './components/Main';

// function handleClick(e){
//   e.preventDefault();
//  console.log('The button was clicked')
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Main />
        <Bible />
       </header>
    </div>
  );
}

export default App;
