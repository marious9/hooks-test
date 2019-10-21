import React from 'react';
import './App.css';
import Servers from './servers/Servers';
import Header from './header/Header';
import Items from './servers/Items';
import CollectionExample from './collection/collection.example';

const App = () => {
  return (
    <div className="App">    
        <Header />
        {/* <Servers /> */}
        {/* <Items /> */}
        <CollectionExample />
    </div>
  );
};

export default App;
