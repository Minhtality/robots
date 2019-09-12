import React from 'react';
import CardList from './components/CardList'
import { robots } from './components/robots';
import './App.css';

function App() {
  return (
    <div className="App">
      <CardList robotsProp={robots} />  {/* robotProps can be anything. and 'robots' is linked to the const declared in "robots.js" w/ the import */}
    </div>
  );
}

export default App;
