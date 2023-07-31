import React from 'react'

function Tab() {
  return (
    <div className='w-[100%]'>
        <ul className='list-none [&_li]:p-1 ml-2'>
            <li>Home</li>
            <li>Trending</li>
            <li>For you</li>
            <li>Top news</li>
        </ul>
    </div>
  )
}

export default Tab