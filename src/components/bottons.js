import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';



function Bottons(props) {
  var start_stop_class = !props.isOn? "btn btn-success": "btn btn-secondary disabled";
  var wait_class = !props.isOn?"btn btn-secondary disabled":  "btn btn-warning";
  var reset_class = "btn btn-danger";

    return (
    <div className="Bottons">
        <botton onClick = {props.start} className = {start_stop_class}>Start</botton>
        <botton onClick = {props.wait} className = {wait_class}>Wait</botton>
        <botton onClick = {props.stop} className = {reset_class}>Stop</botton>
        
    </div>
  );
}

export default Bottons;