import React from 'react';
import '../App.css';
import {useSelector} from 'react-redux';



function Timer(props) {
  const time = useSelector((state)=> state.time)
  return (
   <div className="m-5">
        <span >{ ('0' + Math.floor(time / 3600)).slice(-2) }</span>
        &nbsp;:&nbsp;
        <span >{ ('0' + Math.floor(time%3600 / 60 )).slice(-2)}</span>
        &nbsp;:&nbsp;
        <span >{ ('0' + Math.floor(time) % 3600 % 60).slice(-2)} </span>
        
    </div>
  );
}

export default Timer;
