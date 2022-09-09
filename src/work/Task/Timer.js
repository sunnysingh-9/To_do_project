import React from 'react'
import {useState, useEffect} from 'react';

const Timer = () => {


const [seconds , setSeconds] = useState(0);
const [minutes, setMinutes] = useState(0);
const [hours, setHours] = useState(0);


var  timer ;

useEffect (()=>{
    timer = setInterval(() => {

        setSeconds (seconds +1);

        if(seconds === 59 && hours === 59){
            setMinutes (minutes + 1);
            setSeconds(0);

            setHours (hours +1);
        setMinutes(0);
        }
        // else if(minutes === 59)
        // setHours (hours +1);
        // setMinutes(0);
        
    }, 1000);

    return ()=> clearInterval(timer);
});

const restart =()=>{
    setMinutes(0);
    setSeconds(0);
    setHours(0);

}

const stop =()=>{
    clearInterval(timer);
    
}

  return (
    <div className='timer'>
        <div className='container'>
            <div className='timercontainer'>
                <h1>Timer</h1>
                <h1>{hours<10? "0"+hours:hours}:{minutes<10? "0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</h1>
                <button className='restart' onClick={restart}>Restart</button>
                <button className='start' onClick={stop}>stop</button>



            </div>

        </div>
      
    </div>
  )
}

export default Timer
