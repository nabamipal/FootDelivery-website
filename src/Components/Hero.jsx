import React from 'react'

function Hero() {
  return (
    <section className='max-w-[1240px] mx-auto  '>
        <div className='grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
            {/* brand info */}
           <div className='flex flex-col justify-center py-14 md:py-0'>
             <h1 className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal md:items-center'>Gyms gives you<br/> the perfect 
                {" "}
            </h1>
            <h1 className='text-amber-700 text-6xl font-bold leading-relaxed'>Helth</h1>
            <p className='text-gray-600 xl:max-w-[500px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Nihil iure doloremque beatae sapiente velit sint, natus nam
                 quia tempora atque ratione eligendi cumque quasi ut.
                 Odio quo illum temporibus amet!</p>
            {/* button section */}
            <div className='flex justify-center gap-8 md:justify-start'>
                <button className='bg-amber-700 px-5 py-2 rounded flex items-center gap-2 mt-4'>Order Now</button>
                <button className='flex-justify-center gap-2 mt-4 '>Watch Now</button>
            </div>
           </div>
            {/* hero image */}
            <div className='flex justify-center items-center'>
                <img src={"https://images.pexels.com/photos/4587363/pexels-photo-4587363.jpeg"} alt=""
                className='w-[350px] md:w-[550px] rounded-md '/>
            </div>
        </div>
    </section>
  )
}

export default Hero
