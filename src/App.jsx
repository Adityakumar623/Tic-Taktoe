import React ,{useState} from "react";
import Board from "./components/Board";

import  "./styles/root.scss"
import { calculateWinner } from "./helpers";
import StatusMessage from "./components/StatusMessage";
import History from "./components/History"

const NEW_GAME= [
{board :Array(9).fill(null) , isXNext:true},
  ];



const App=()=> {

  const [history,setHistory]=useState(NEW_GAME);
 const[currentMove,setCurrentMove]=useState(0);
  
  const current=history[currentMove];
  
const {winner,winningSquares}=calculateWinner(current.board);
 
  
  const handleSquareClick=(position)=>{
  
  if(current.board[position] || winner ){
    return;
  }   
  
  
    setHistory((prev)=>{
const last=prev[prev.length-1];


    const newBoard= last.board.map((square,pos) => {
      if(pos===position){
        return last.isXNext ?'X':'0';
      }
      return square;
    });

    return prev.concat({board:newBoard,isXNext:!last.isXNext})
    });
    
   // setIsXNext((prev)=>!prev);
   setCurrentMove(prev=>prev+1);
  }

  const moveTo=move => {
    setCurrentMove(move);

  }

  const onNewGame=()=>{
    setHistory(NEW_GAME)
    setCurrentMove(0);
  }

 return(
  <div className="app">
    <h1>Tic Tak Toe</h1>
    <StatusMessage  winner={winner}  current ={current}/>
    <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares} />
     <button type="button" onClick={onNewGame}>Start New game</button>
     <History history={history} moveTo={moveTo}  currentMove={currentMove}/>
  </div>
 );

};

export default App;