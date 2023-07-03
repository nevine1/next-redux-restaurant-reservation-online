
"use client";
import {useState, useEffect} from 'react'

const page = () => {
  const text = ['hello', 'mark', 'vvena', 'dodo'];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(()=>{
    const textInterval = setInterval(() =>{
      setTextIndex((textIndex + 1) % text.length);
    }, 6000);
    return ()=> clearInterval(textInterval);
  }, [textIndex, text]);

  
  return (
    <div>
      {
        text.map((txt, index) =>(
          <p key={index} style={{color: 'red', fontSize: '40px'}}>{txt}</p>
        ))
      }
    </div>
  )
}

export default page