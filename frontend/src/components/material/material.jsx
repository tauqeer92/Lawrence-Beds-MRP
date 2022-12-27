import React from 'react';

const Material = ({material}) => {
  return (
    <div>
      <h1>{material.name}</h1>
      <h3>Price: {material.price}</h3>
      <h3>Description: {material.description}</h3>
    </div>
    
  )
  

}

export default Material