import logo from './logo.svg';
import './App.css';

function Square({value}){
  return <button className="square">{value}</button>
}

function App() {
  return (
    <>
      <div className='board-row'>
        <Square value='1'></Square>
        <Square value='2'></Square>
        <Square value='3'></Square>
      </div>
      <div className='board-row'>
        <Square value='4'></Square>
        <Square value='5'></Square>
        <Square value='6'></Square>
      </div>
      <div className='board-row'>
        <Square value='7'></Square>
        <Square value='8'></Square>
        <Square value='9'></Square>
      </div>
    </>
  )
}

export default App;
