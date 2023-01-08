import React ,{useState} from "react";
import Board from "./components/Board";

import  "./styles/root.scss"
import { calculateWinner } from "./helpers";

const App=()=> {

  const [history,setHistory]=useState([{board :Array(9).fill(null) , isXNext:true},
  ]);
 const[currentMove,setCurrentMove]=useState(0);
  
  const current=history[currentMove];
  
const winner=calculateWinner(current.board);
  const message=winner
  ?`winner is ${winner}`
  :`Next player is ${current.isXNext?'X':'0'}`;
  
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

 return(
  <div className="app">
    <h1>Tic Tak Toe</h1>
    <h2>{message}</h2>
    <Board board={current.board} handleSquareClick={handleSquareClick} />
  </div>
 );

};

export default App;