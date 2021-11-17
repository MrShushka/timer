import React from 'react';
import '../App.css';



function Timer(props) {
  
  return (
   <div className="m-5">
        <span >{ ('0' + Math.floor(props.time / 3600)).slice(-2) }</span>
        &nbsp;:&nbsp;
        <span >{ ('0' + Math.floor(props.time%3600 / 60 )).slice(-2)}</span>
        &nbsp;:&nbsp;
        <span >{ ('0' + Math.floor(props.time) % 3600 % 60).slice(-2)} </span>
        
    </div>
  );
}

export default Timer;
