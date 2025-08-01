import { useState, useEffect, useRef } from "react";
 function Throttle() {
  const [clock, setClock] = useState();
  function time() {
    const date = new Date();
    const time = date.toLocaleTimeString();
    setClock(time)
  }

  useEffect(()=>{
    setInterval(time(), 1000);
  },[])

  return (
    <div>
      <p>Current Time - {clock}</p>
    </div>
  );
}
export default Throttle;
