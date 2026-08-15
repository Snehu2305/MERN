import React from 'react'

import { NavLink } from 'react-router-dom'



const Gallery = () => {
  return (
    <>
        <h1 className='text-center text-3xl text-pink-400 m-5'> A Glimpse of My Art</h1>

        <div className='grid grid-cols-3 gap-2 m-12'>

            <NavLink to='/gallery/1'>
            <img className='size-60 rounded-lg' src="/img/p1.jpeg" alt="" />
            </NavLink>
            <NavLink to='/gallery/2'>
             <img className='size-60 rounded-lg' src="/img/p2.jpeg" alt="" />
             </NavLink>
             <NavLink to='/gallery/3'>
              <img className='size-60 rounded-lg' src="/img/p3.jpeg" alt="" />
              </NavLink>
              <NavLink to='/gallery/4'>
               <img className='size-60 rounded-lg' src="/img/p4.jpeg" alt="" />
               </NavLink>
               <NavLink to='/gallery/5'>
                <img className='size-60 rounded-lg' src="/img/p5.jpeg" alt="" />
                </NavLink>
                <NavLink to='/gallery/6'>
                 <img className='size-60 rounded-lg' src="/img/p6.jpeg" alt="" />
                 </NavLink>
                 <NavLink to='/gallery/7'>
                  <img className='size-60 rounded-lg' src="/img/p8.jpeg" alt="" />
                  </NavLink>
                  <NavLink to='/gallery/8'>
                   <img className='size-60 rounded-lg' src="/img/p11.jpeg" alt="" />
                   </NavLink>
        </div>
    </>
  )
}

export default Gallery