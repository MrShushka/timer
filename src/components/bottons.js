import React from 'react';
import { useDispatch, useSelector} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';



function Bottons(props) {
  const dispatch = useDispatch()
  const isOn = useSelector((state)=> state.isOn)
  var start_stop_class = !isOn? "btn btn-success": "btn btn-secondary disabled";
  var wait_class = !isOn?"btn btn-secondary disabled":  "btn btn-warning";
  var reset_class = "btn btn-danger";

    return (
    <div className="Bottons">
        <botton onClick = {() => dispatch({type: 'START'})} className = {start_stop_class}>Start</botton>
        <botton onClick = {() => dispatch({type: 'WAIT'})} className = {wait_class}>Wait</botton>
        <botton onClick = {() => dispatch({type: 'STOP'})} className = {reset_class}>Stop</botton>
        
    </div>
  );
}

export default Bottons;