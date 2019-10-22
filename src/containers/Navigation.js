import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Bible from '../components/pictures/Bible'

function Navigation() {
    return (
      <div className="Navigation">
        <header className="App-header">
          <Header />
          <Main />
          <Bible />
         </header>
      </div>
    );
  }

  export default Navigation;