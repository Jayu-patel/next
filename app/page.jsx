'use client'
import { useEffect, useState } from "react"
import Tab from "./components/Tab"
import { Cinzel } from "next/font/google"
export default function Home() {
  const [s, setS] = useState({
    bool: true,
    t: 'translateX(-300px)',
    op: 'rgba(0,0,0,0)'
  })

  const fun = () => {
    s.bool ?

    setS({
      bool: false,
      t: 'translateX(0px)',
      op: 'rgba(0,0,0,0.4)'
    }) :

    setS({
      bool: true,
      t: 'translateX(-300px)',
      op: 'rgba(0,0,0,0)'
    })
  }

  useEffect(()=>{
    console.log("updated")
  },[s.bool])

  return (
    <div className='w-screen h-screen relative'>
      <div className={`w-[100%]`} style={{background: s.op}}>
        <button className="border-[1px] border-black py-[8px] px-[5px] bg-yellow-300 m-1" onClick={()=>{fun()}}>open</button>
      </div>
      <div className={`w-full h-full`} onClick={fun} style={{background: s.op}}>
      <div className={`w-[300px] h-[600px] bg-yellow-300 shadow-md absolute top-0 transition-transform ease-in`} style={{transform: s.t}}>
        <button className="border-[1px] border-black py-[8px] px-[5px] bg-yellow-300 m-1" onClick={()=>{fun()}}>close</button>
        <Tab />
      </div>
      <div className="w-full h-[calc(100vh-200px)] grid place-items-center">
        <h1 className="text-[5rem] font-extrabold text-red-500">JAY</h1>
      </div>
      </div>
    </div>
  )
}