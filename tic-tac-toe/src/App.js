import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Square(){
  const [value, setValue] = useState(null);
  function handleClick(){
    console.log('Clicked!');
    setValue('X');
  }
  return <button className="square" onClick={handleClick}>{value}</button>
}

function App() {
  return (
    <>
      <div className='board-row'>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className='board-row'>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className='board-row'>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
    </>
  )
}

export default App;
