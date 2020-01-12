import React from 'react';
import logo from './logo.svg';
import Clock from './Clock';
import JokeGenerator from './JokeGenerator'
import Date from './Date';
import './App.css';

function App() {
  return (
    <div className="App">
      <JokeGenerator/>
      <Clock />
      <Date />
    </div>
  );
}

export default App;