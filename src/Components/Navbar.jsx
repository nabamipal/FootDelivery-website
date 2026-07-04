import React from 'react'

function Navbar() {
  return (
    <div className='fixed top-0 left-0 w-full z-50 h-25 bg-white shadow-2xl'>
       <div className='max-w-[1240px] mx-auto flex justify-between items-center py-7 px-6' >
        <h1 className='text-5xl font-semibold cursor-pointer text-green-600'>Heal</h1>
      <div className='flex justify-between items-center ms-auto'>
         <ul className='flex item-center gap-8'>
        <li className='cursor-pointer text-xl hover:text-green-600 font-bold'>Home</li>
        <li className='cursor-pointer text-xl hover:text-green-600 font-bold'>Events</li>
        <li className='cursor-pointer text-xl hover:text-green-600 font-bold'>Gallary</li>
        <li className='cursor-pointer text-xl hover:text-green-600 font-bold'>Blogs</li>
        <li className='cursor-pointer text-xl hover:text-green-600 font-bold gap-8'>Contacts</li>
       </ul>
       <button className=' ml-7 px-9 py-4 bg-amber-400 font-bold text-xl text-white hover:bg-white ease-in-out transition-all duration-300 hover:text-amber-400 tracking-wider'>Donate</button>
      </div>
       </div>
    </div>
  )
}

export default Navbar
