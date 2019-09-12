import React from 'react';
import CardList from './components/CardList'
import { robots } from './components/robots';
import './App.css';

function App() {
  return (
    <div className="App">
      <CardList robots={robots} />
    </div>
  );
}

export default App;
