import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';

function App() {
  const onClick = (name: string) => {
    console.log(name);
  }
  return <Greetings name='codingj87' onClick={onClick} />
}

export default App;
