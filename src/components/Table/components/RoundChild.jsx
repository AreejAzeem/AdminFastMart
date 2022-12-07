
import React from 'react';
import "./RoundChild.css";

function RoundChild({name}) {
  return (
    <div className='roundChild'>
    <div style={{display:'flex'}}>
      <h5 className='roundChild_name' style={{display:'flex', margin:'2px'}}> {name}</h5>
    
    </div> 
    </div>
  )
}

export default RoundChild