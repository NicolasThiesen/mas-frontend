import React from 'react';
import {Hello} from './components'
import { Counter } from './components/Counter';
import "./style.css";

function App() {
  return (
    <div className="App">
      <Hello name="Nícolas"></Hello>
      <Counter></Counter>
      <img src="https://media.giphy.com/media/i7zzhzfytQLwusVTHt/giphy.gif" alt="worked" />
    </div>
  );
}

export default App;
