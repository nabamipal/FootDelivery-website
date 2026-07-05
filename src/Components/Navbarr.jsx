import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";


function Navbarr() {
    const [isOpen,setIsOpen] = useState(false)
  return (
   <nav className='bg-blue-700 shadow-lg '>
        <div className='max-w-[1240px] mx-auto px-9'>
            <div className='flex justify-between items-center h-16'>
                <div className='text-white text-2xl font-bold'>
                    logo
                </div>

                <div className='hidden md:flex items-center space-x-8 '>
                    <a href="#"className='text-white hover:text-yellow-300'>Home</a>
                    <a href="#"className='text-white hover:text-yellow-300'>About</a>
                    <a href="#" className='text-white hover:text-yellow-300'>Service</a>
                    <a href="#" className='text-white hover:text-yellow-300'>contact</a>

                    <button className='bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 hover:text-black transition'>Sign Up</button>
                </div>

                {/* mobile view */}
                <button
                    onClick={()=>setIsOpen(!isOpen)}
                    className='md:hidden text-white text-3xl'>
                        
                    {isOpen? <IoMdClose/>:  <IoMenu />}

                       </button>
                
            </div >
            {/* mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}>
            <div className='flex flex-col  gap-4 ease-in-out transform duration-300'>
                <a href="#"className='text-white hover:text-yellow-300'>Home</a>
                    <a href="#"className='text-white hover:text-yellow-300'>About</a>
                    <a href="#" className='text-white hover:text-yellow-300'>Service</a>
                    <a href="#" className='text-white hover:text-yellow-300'>contact</a>

                    <button className='bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 hover:text-black transition'>Sign Up</button>
            </div>

        </div>
        </div>
   </nav>
  )
}

export default Navbarr
