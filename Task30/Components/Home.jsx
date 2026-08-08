import React from 'react'
import bgImg from '../src/imgs/p7.jpeg'

const Home = () => {
  return (
   <>

      <div className='flex gap-15'>
          <div className='ml-16 mt-20'>
            <h1 className='text-5xl text-pink-400'>Snehal's <br />Creative Corner</h1>
            <p className='mt-3 text-pink-300'>Where Every Stroke Tells a Story. ✨</p>
            </div>

            <div className='grid grid-cols-2 gap-2 mt-5'>
              <img className='col-span-2 w-full h-40 object-cover rounded-lg' src="/img/p8.jpeg" alt="" />
              <img  className='w-40 h-40 rounded-lg' src="/img/p9.jpeg" alt="" />
              <img  className='w-40 h-40 rounded-lg' src="/img/p10.jpeg" alt="" />

            </div>
        </div>

   </>
  )
}

export default Home
