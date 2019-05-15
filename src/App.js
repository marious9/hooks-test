import React from 'react';
import './App.css';
import Servers from './servers/Servers';
import Header from './header/Header';
import Items from './servers/Items';

const App = () => {
  return (
    <div className="App">    
        <Header />
        {/* <Servers /> */}
        <Items />
    </div>
  );
};

export default App;
