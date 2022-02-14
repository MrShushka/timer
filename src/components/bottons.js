import React ,{useEffect}from 'react';
import 'bootstrap/dist/css/bootstrap.css';



function Bottons(props) {
  var start_stop = !props.isOn? props.start: props.stop;
  var start_stop_class = !props.isOn? "btn btn-success": "btn btn-danger";
 
  var wait_class = !props.isOn?"btn btn-secondary disabled":  "btn btn-warning";
  var reset_class = props.reset? "btn btn-primary" : "btn btn-secondary disabled";
  

    
    useEffect(()=> {
    const button = document.getElementById('button');
    let timer;

    button.addEventListener('click', event => {
    if (event.detail === 1) {
        timer = setTimeout(() => {
        }, 300);
      }
    })
      button.addEventListener('dblclick', event => {
        clearTimeout(timer);
       props.wait();
     
      })
    })

    return (
    <div className="Bottons">
        <botton onClick = {start_stop} className = {start_stop_class}>{props.isOn? "Stop": "Start"}</botton>
        <botton id = 'button' className = {wait_class}>Wait</botton>
        <botton onClick = {props.reset} className = {reset_class}>Reset</botton>
        
    </div>
  );
}

export default Bottons;