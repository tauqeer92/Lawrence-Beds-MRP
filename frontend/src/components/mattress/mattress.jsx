import React from 'react';

const Mattress = ({mattress}) => {
  return (
    <div>
      <h3>{mattress.name}</h3>
      <h3>{mattress.size}</h3>
      <h3>{mattress.type}</h3>
      <h3>{mattress.cost}</h3>
      <h3>{mattress.price}</h3>
      <h3>{mattress.description}</h3>
    </div>
    
  )
  

}

export default Mattress