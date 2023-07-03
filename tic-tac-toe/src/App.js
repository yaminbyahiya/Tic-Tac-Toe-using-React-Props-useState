import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Square({value, onSquereClick}){
  // const [value, setValue] = useState(null);
  // function handleClick(){
  //   console.log('Clicked!');
  //   setValue('X');
  // }
  return <button className="square" onClick={onSquereClick}>{value}</button>
}

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];
  function handlePlay(nextSquares){
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  return(
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}></Board>
      </div>
      <div className='game-info'>
        <ol>

        </ol>
      </div>
    </div>
  )
}

function Board({ xIsNext, squares, onPlay }){
  // const [xIsNext, setXIsNext] = useState(true);
  // const [squares, setSquares] = useState(Array(9).fill(null));
  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner: " + winner;
  }else{
    status = "Next turn: " + (xIsNext? "X" : "O");
  }
  function handleClick(i){
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i]="X";
    }else{
      nextSquares[i]="O";
    }
    onPlay(nextSquares);
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onSquereClick={() => handleClick(0)}></Square>
        <Square value={squares[1]} onSquereClick={() => handleClick(1)}></Square>
        <Square value={squares[2]} onSquereClick={() => handleClick(2)}></Square>
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquereClick={() => handleClick(3)}></Square>
        <Square value={squares[4]} onSquereClick={() => handleClick(4)}></Square>
        <Square value={squares[5]} onSquereClick={() => handleClick(5)}></Square>
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquereClick={() => handleClick(6)}></Square>
        <Square value={squares[7]} onSquereClick={() => handleClick(7)}></Square>
        <Square value={squares[8]} onSquereClick={() => handleClick(8)}></Square>
      </div>
    </>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
