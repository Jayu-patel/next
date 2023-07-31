import React from 'react'

function Login() {
  return (
    <div className='w-screen h-[calc(100vh-49px)] grid place-items-center'>
      <div className='w-[800px] flex flex-col gap-2'>
        <div className='w-full flex flex-row [&_.c]:rounded-md [&_.c]:flex-1 [&_.c]:h-full h-[60px] [&_.c]:text-white [&_.c]:text-[1.2rem] [&_.c]:bg-blue-400 [&_.c]:grid [&_.c]:place-items-center gap-2'>
          <div className='c'><h2>JavaFX API</h2></div>
          <div className='c'><h2>Scene Graph</h2></div>
        </div>

        <div className='h-[60px] text-white text-[1.2rem] bg-blue-400 grid place-items-center rounded-md'><h2>Quantam</h2></div>

        <div className='flex flex-col bg-blue-800 rounded-xl'>
          <div className='text-[1.2rem] text-white w-full grid place-items-center py-2 pb-4'><h2>JavaFX Graphics Engine</h2></div>
          <div className='text-white flex flex-row w-full justify-evenly [&_div]:py-3 [&_div]:w-[23%] [&_div]:bg-blue-400 pb-5 [&_div]:grid [&_div]:place-items-center [&_div]:border-white [&_div]:border-[2px] [&_div]:rounded-md'>
            <div><h2>Prism</h2></div>
            <div><h2>Glass</h2></div>
            <div><h2>Web View</h2></div>
            <div><h2>Media</h2></div>
          </div>
          <div className='text-white flex flex-row w-full justify-evenly [&_div]:py-3 [&_div]:w-[23%] [&_div]:bg-blue-400 pb-5 [&_div]:grid [&_div]:place-items-center [&_div]:border-white [&_div]:border-[2px] [&_div]:rounded-md'>
            <div><h2>Win32</h2></div>
            <div><h2>OpenGL</h2></div>
            <div><h2>Web kit</h2></div>
            <div><h2>G Streams</h2></div>
          </div>

        </div>

        <div className='h-[60px] text-white text-[1.2rem] bg-blue-400 grid place-items-center rounded-md'><h2>JDk API and Toolkit</h2></div>

        <div className='h-[60px] text-white text-[1.2rem] bg-blue-400 grid place-items-center rounded-md'><h2>Java Virtual Machine</h2></div>

      </div>
    </div>
  )
}

export default Login