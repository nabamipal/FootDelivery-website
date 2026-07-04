import React from 'react'

function HeadLinesCard() {
  return (
    <div className='max-w-[1520px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* card */}
      <div className='rounded-xl relative'>
        {/* overlay */}

        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Suns out,BOGOs out </p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px]  md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/34321390/pexels-photo-34321390.jpeg" alt="/" />
      </div>
      <div className='rounded-xl relative'>
        {/* overlay */}

        <div className='absolute w-full h-full  rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Suns out,BOGOs out </p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px]  md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/37180122/pexels-photo-37180122.jpeg" alt="/" />
      </div>
      <div className='rounded-xl relative'>
        {/* overlay */}

        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Suns out,BOGOs out </p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px]  md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/34321390/pexels-photo-34321390.jpeg" alt="/" />
      </div>
    </div>
  )
}

export default HeadLinesCard
