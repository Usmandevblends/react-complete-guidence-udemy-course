import React, { useState } from 'react';
import Player from './Components/Player';
import GameBoard from './Components/GameBoard';
import Log from './Components/Log';
import './index.css';

function App() {
  const [gameTurn, setGameTrun] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
    setGameTrun((curGameTurn) => [...curGameTurn, activePlayer])
  }

  return (
    <>
      <main>
        <div id="game-container">
         <ol id='players' className='highlight-player'>
            <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
            <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
         </ol>
         <GameBoard onSelectSquar={handleSelectSquare} activePlayerSymbol={activePlayer} />
        </div>
        <Log />
      </main>
    </>
  )
}

export default App;