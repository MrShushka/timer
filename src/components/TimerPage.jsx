import React, {useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import Timer from './timer';
import Bottons from './bottons';
import './TimerPage.css';

function TimerPage() {
    const isOn = useSelector((state)=> state.isOn)
    const dispatch = useDispatch()

  useEffect(()=>{
    const unsubscribe = new Subject();
    interval(1000)
        .pipe(takeUntil(unsubscribe))
        .subscribe(() => {
          if (isOn) {
            dispatch({type: 'INCRIMENT'});
          }
        });
    return () => {
      unsubscribe.next();
      unsubscribe.complete();
    };
  }, ); 

  return (
    <div className="main-section">
      <Timer />
      <Bottons  />
    </div>
  );
}

export default TimerPage;