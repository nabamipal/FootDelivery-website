import React,{useState} from 'react'
import logo from "../assets/react.svg"
import {NavbarMenu} from "../Components/mockData/Data"
import { FaCartPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function Nav() {
    const [open,setOpen] = useState(false)
  return (
    <>
     <nav className='  px-5 shadow-lg h-25'>
    <div className='max-w-[1240px] mx-auto  h-16 flex items-center justify-between py-12'>
        {/* logo */}
        <div className='flex items-center text-2xl font-bold uppercase gap-2 '>
            <img src={logo} alt="logo" />
            <p>Coders</p>
            <p className='text-amber-700'>Gym</p>
        </div>
        {/* menu */}
        <div className='hidden md:block'>
          <ul className='flex items-center justify-center gap-4 text-gray-600'>
              {
                NavbarMenu.map((item)=>{
                return <li key={item.id}>
                <a href={item.link} className='inline-block py-1 px-3 text-lg hover:text-amber-700 font-semibold'>{item.title}</a>
                </li>
                })
            }
          </ul>
        </div>
        {/* icon */}
        <div className='flex items-center gap-4'>
            <button className='text-2xl hover:bg-amber-700 hover:text-white rounded-full p-2 duration-200'>
                <FaSearch/>
            </button>
            <button className='text-2xl hover:bg-amber-700 hover:text-white rounded-full p-2 duration-200'>
                <FaCartPlus/>
            </button>
            <button className='hover:bg-amber-700  text-amber-700 hover:text-white font-bold rounded-md px-6 py-2 border-2 border-amber-700
            duration-200 hidden md:block '>
                Login
            </button>
        </div>
        {/* mobile menu */}
        <div className='md:hidden' onClick={()=> setOpen(!open)}>
            {open?  <IoMdClose size={30}/>:<IoMenu size={30}/>}
        </div>
        {/* mobile section menu */}
        <div className={`absolute left-0 top-20 w-full  shadow-lg bg-amber-700 rounded-2xl text-white md:hidden overflow-hidden transition-all duration-300 ${
            open? "max-h-96 opacity-100 ": "max-h-0"
        }`}>
            <ul className='flex flex-col items-center py-4'>
                 {
                NavbarMenu.map((item)=>{
                return <li key={item.id}>
                <a href={item.link}
                onClick={()=> setOpen(false)}
                 className='block py-3 px-3 text-lg hover:text-amber-700 font-semibold'>{item.title}</a>
                </li>
                })
            }
            </ul>
          

        </div>
    </div>
   </nav>
   </>
  )
    
  
}

export default Nav
