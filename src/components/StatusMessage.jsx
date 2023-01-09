import React from 'react'

function StatusMessage({winner , current}) {
  

{/* const message=winner
  ?`winner is ${winner}`
  :`Next player is ${current.isXNext?'X':'0'}`; */}
  
  const noMovesLeft=current.board.every((el)=>el!==null)

  return  (<h2>{
    winner && `winner is ${winner}`}{!winner && !noMovesLeft && `Next player is ${current.isXNext?'X':'0'}`}
     {!winner && noMovesLeft && 'X and 0 tied'}
     </h2>

  );
};

export default StatusMessage
