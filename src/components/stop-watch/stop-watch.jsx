import { useState,useEffect,useRef } from "react";
function StopWatch(){
    const [hours,SetHours] = useState(0)
    const [minutes,SetMinutes] = useState(0)
    const [seconds,SetSeconds] = useState(0)
    const [milliSeconds,SetMilliSeconds] = useState(0)
    let thread = useRef(null)
    let hr = 0;
    let min = 0;
    let sec = 0;
    let ms = 0;
    function handleChange(){
        ms++;
        SetMilliSeconds(ms)
        if (ms == 99){
            sec++;
            SetSeconds(sec)
            ms = 0;
            if (sec == 59){
                min++;
                SetMinutes(min)
                sec = 0;
                if(min == 59){
                    hr++;
                    SetHours(hr)
                    min =0;
                }
            }
        }
    }
    function handleClick(){

       thread.current =  setInterval(handleChange,1)
    }
    

    return(
        <div className="container-fluid">
            <div className="d-flex justify-content-center fs-3">
                <span>{hours}</span>:
                <span>{minutes}</span>:
                <span>{seconds}</span>:
                <span>{milliSeconds}</span>

            </div>
            <div>
                <button onClick={handleClick}>Start</button>
            </div>
        </div>
    )
}
export default StopWatch;