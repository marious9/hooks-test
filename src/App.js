import React from 'react';
import './App.css';
import Servers from './servers/Servers';
import Header from './header/Header';

const App = () => {
  return (
    <div className="App">    
        <Header />
        <Servers />
    </div>
  );
};

export default App;
