import React from 'react';
import './App.css';

import TodoCards from './components/TodoCards'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Reducer Todo App</h1>
      </header>
      <TodoCards />
    </div>
  );
}

export default App;
