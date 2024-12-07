import { useEffect, useState } from "react";
let CurrentTime=()=>
    {
      const[time,settime]=useState(new Date());
      useEffect(()=>{
        const intervalId=setInterval(()=>
        {
          settime(new Date());
        },1000);
        
        return()=> {
          clearInterval(intervalId);
        }
      }
    ,[])
        // let time=new Date();
      return <p className="lead">This is the current time:{time.toLocaleDateString()}-{time.toLocaleTimeString()}</p>
    };
    export default CurrentTime;