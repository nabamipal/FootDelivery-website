import React,{useState} from "react";
import { IoMenu } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";


function Navbar2() {
    const [nav,setNav]=useState(false)
  return (
    <div className="max-w-[1440px] mx-auto flex justify-between item-center p-4">
        {/* left side */}
     <div className="flex items-center">
        <div onClick={()=>setNav(!nav)} className="cursor-pointer">
        <IoMenu size={30}/>
        </div>  
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">Best <span className="font-bold">Eats</span></h1> 
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
         <p className="bg-black text-white rounded-full p-2">Delevery</p>
        <p className="p-2">Pickup</p>
        </div>
    </div> 
    {/* Search icon */}
    <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
         <IoSearchSharp size={25}/>
        <input className="bg-transparent p-2 w-full focus:outline-none" type="text" placeholder="Search Food"/>
    </div>
    {/* cart button */}
        <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
            <FaCartPlus size={20} className="mr-1" />Cart

        </button>

        
        
        {/* mobile menu */}
        {nav?  <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"> </div>: ""}
        {/* side drawer menu */}
        <div className={nav?"fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300":"fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
            <MdClose 
            onClick={()=>setNav(!nav)}
            size={30} className="absolute right-4 top-4 cursor-pointer" />
            <h2 className="text-2xl p-4">Best <span className="font-bold">Eats</span></h2>
            <nav>
                <ul className="flex flex-col p-4 text-gray-800">
                    <li className="text-xl py-4 flex"><MdDeliveryDining size={25} className="mr-4" />orders</li>
                    <li className="text-xl py-4 flex"><MdDeliveryDining size={25} className="mr-4" />Favorites</li>
                    <li className="text-xl py-4 flex"><MdDeliveryDining size={25} className="mr-4" />wallets</li>
                    <li className="text-xl py-4 flex"><MdDeliveryDining size={25} className="mr-4" />Helps</li>
                    <li className="text-xl py-4 flex"><MdDeliveryDining size={25} className="mr-4" />Promotions</li>
                    <li className="text-xl py-4 flex"><MdDeliveryDining size={25} className="mr-4" />best Ones</li>
                    <li className="text-xl py-4 flex"><MdDeliveryDining size={25} className="mr-4" />invite Friends</li>


                </ul>
            </nav>

        </div>
    </div>
  )
    

  
  
}

export default Navbar2;
