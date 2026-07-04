import React from 'react'

function Home() {
  return (
    <div className="relative w-full h-screen">
 <img
  src="https://demos.codexcoder.com/heal/charity/demo-01/wp-content/uploads/2025/09/01.jpg"
  alt="Nature" className='w-full h-full object-cover'/> 
   <div className="absolute inset-0 bg-black/50"></div>
   <div className='absolute inset-0 flex  items-center text-white'>
    <div className='max-w-5xl mt-20  mx-15 px-10 text-white'>
        <h1 className='px-10 mx-10 mb-10 text-4xl tracking-wider font-semibold text-amber-500'>DONATE & HELP</h1>
        <h1 className='mt-4 text-7xl font-semibold mx-10 px-10'>POOR CHILDREN   FOR <br/> EDUCATION</h1>
        <p className=' text-lg mt-5 mx-10 px-10 font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos debitis vitae mollitia nam enim possimus dolorum facere quod, 
            voluptatibus facilis,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium facilis quia dolore voluptates repellendus consectetur aut velit eos quae. Nulla magnam eveniet minus cum explicabo autem amet optio dicta? Eos. </p>

<div className='px-7 mt-7  mx-5'>
                   <button className=' ml-7 px-10 py-4 bg-amber-400 font-bold text-xl text-white hover:bg-white ease-in-out transition-all duration-300 hover:text-amber-400 tracking-wider'>Donate</button>

</div>
    </div>
   </div>
    </div>

   
  )
}

export default Home
