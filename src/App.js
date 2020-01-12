import React from 'react';
import logo from './logo.svg';
import Clock from './Clock';
import JokeGenerator from './JokeGenerator'
import './App.css';

function App() {
  return (
    <div className="App">
      <JokeGenerator/>
      <Clock />
    </div>
  );
}

export default App;