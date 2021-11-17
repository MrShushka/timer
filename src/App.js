import React, {useState, useEffect} from 'react';
// import {Observable, interval, timeInterval} from 'rxjs';
import 'bootstrap/dist/css/bootstrap.css';
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import Timer from './components/timer';
import Bottons from './components/bottons';
import './App.css';

function App() {
  const [time, setTime] = useState (0);
  const [isOn, setIsON] = useState (false);
  

  

  useEffect(()=>{
    const unsubscribe = new Subject();
    interval(1000)
        .pipe(takeUntil(unsubscribe))
        .subscribe(() => {
          if (isOn) {
            setTime(val => val + 1);
          }
        });
    return () => {
      unsubscribe.next();
      unsubscribe.complete();
    };
    // let interv
    // if (isOn){
    //   interv = setInterval (()=> {
    //     setTime(time + 1);
    //   }, 100)
    // }
    // else {
    //   clearInterval(interv);
    // }

    // return () => {
    //   clearInterval(interv);
    // }
    
  }, );
  

  const startHandler = () =>{
    setIsON(true);
  }

  const resetHandler = () => {
    setTime(0);
    console.log("rest");
  }

  const stopHandler = () =>{
    setIsON(false);
    setTime(0);
    console.log("stop");
  }

  const waitHandler = () => {
    setIsON(false);
  }

  
  
  return (
    <div className="main-section">
      
      <Timer time = {time}/>
      <Bottons wait = {waitHandler} start = {startHandler} stop = {stopHandler} reset = {time!== 0?resetHandler:null} isOn = {isOn}/>
    </div>
  );
}

export default App;
