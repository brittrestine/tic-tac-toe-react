import './App.css';

import React from 'react';
import TicTacToeGrid from './TicTacToeGrid'

function App() {
  return (
    <>
    <TicTacToeGrid />

      <div>
        <button className="Restart">Restart</button>
      </div>
    </>
  );
}

export default App;
