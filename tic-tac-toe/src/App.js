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
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i){
    if(squares[i]){
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i]="X";
    }else{
      nextSquares[i]="O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <>
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

export default App;
