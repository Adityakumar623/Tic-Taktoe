import React from 'react';


const Square = ({value}) => {
  //  console.log(props);
  return <button type="button" className='square'>
    {value}
    </button>;
}

export default Square;
