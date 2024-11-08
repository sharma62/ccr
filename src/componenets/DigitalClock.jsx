import React, { useState } from 'react'

const DigitalClock = () => {
    let newTime =  new Date().toLocaleTimeString();
    const[currTime,setTime]= useState(newTime)

    setTimeout(() => {
        let newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }, 1000);

  return (
    <> 
       <h1 style={{color:'red'}}>{currTime}</h1>
    </>
  )
}

export default DigitalClock
