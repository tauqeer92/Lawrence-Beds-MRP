import React from 'react';

const Mattress = ({mattress}) => {
  return (
    <div>
      <h1>{mattress.name}</h1>
      <h3>Size: {mattress.size}</h3>
      <h3>Type: {mattress.type}</h3>
      <h3>Cost: {mattress.cost}</h3>
      <h3>Price: {mattress.price}</h3>
      <h3>Description: {mattress.description}</h3>
    </div>
    
  )
  

}

export default Mattress