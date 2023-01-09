import React from 'react'

function StatusMessage({winner , current}) {
  

{/* const message=winner
  ?`winner is ${winner}`
  :`Next player is ${current.isXNext?'X':'0'}`; */}
  
  const noMovesLeft=current.board.every((el)=>el!==null)

  return  (
  <div className="status-message">

 {winner && (
  <>
 
 Winner is {' '}
  <span className={winner ==='X'?'text-green' :'text-orange'}>
 {winner}
 </span>

 </>
  )}
  {!winner && 
  !noMovesLeft &&
  <>
Next player is <span className={current.isXNext ?'text-green' :'text-orange'}> 
{current.isXNext?'X':'0'}{' '}
</span>
   </>
   }
     {!winner && noMovesLeft &&  <>
      <span className="text-green">X</span> and <span className="text-orange">0</span>
     </>
     
     }
     </div>

  );
};

export default StatusMessage
