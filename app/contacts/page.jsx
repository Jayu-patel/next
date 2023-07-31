'use client'
import Tab from "../components/Tab"
import { useEffect, useState } from "react"
function Contact() {
  const [s, setStyle] = useState({
    bool: true, transform: 'translateX(-300px)', background: 'rgba(0,0,0,0)', display: 'block'
  })

  const fun = () => {
    s.bool ? 

    setStyle({
      bool: false, transform: 'translateX(0px)', background: 'rgba(0,0,0,0.4)', display: 'none'
    }) :
    
    setStyle({
      bool: true, transform: 'translateX(-300px)', background: 'rgba(0,0,0,0)', display: 'block'
    })
  }
  useEffect(()=>{
    console.log('updated')
  },[s.bool])

  return (
    <div className={`w-screen h-screen relative`}>
        <div className={`absolute top-0 w-screen bg-opacity-40 z-10`} style={{background: s.background}}>
          <button className="border-[1px] border-black py-[8px] px-[5px] bg-yellow-300 m-1" onClick={()=>{fun()}} style={{display: s.display}}>Open</button>
        </div>
        <div className={`w-screen h-[calc(100vh-50px)] absolute top-0 z-[5] bg-opacity-40`} style={{background: s.background}}>
          <div className={`w-[300px] h-[600px] bg-yellow-300 shadow-md transition-transform ease-in`} style={{transform: s.transform}}>
            <button className="border-[1px] border-black py-[8px] px-[5px] bg-yellow-300 m-1" onClick={()=>{fun()}}>close</button>
            <Tab />
        </div>
        </div>
        <div className="w-screen h-screen grid place-items-center">
          <div className="w-[400px] h-[300px]">
          <h1 className="text-pink-600 font-bold text-[5rem]">JAY</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolorum, doloribus ex labore pariatur optio tenetur praesentium saepe unde sit. Neque, rem sed totam laborum repellat nesciunt consequuntur ipsa molestias?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
    </div>
  )
}

export default Contact