import React from 'react';


const getDate=()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [time, setTime]=React.useState("")
    const getCurrentTime=()=>{
      setTime(new Date().toTimeString());
     }
   return(
       <>
          <div>{time}</div>
         <button onClick={getCurrentTime}>get Time</button>
       </>

   )
}

export default getDate;