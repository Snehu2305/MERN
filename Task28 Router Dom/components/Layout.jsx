import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <div className='flex gap-10 bg-zinc-900 items-center'>

        <div>
            <img className='ml-5 rounded-full h-10 w-10' src="../img/logo.jpeg" alt="logo" />
        </div>
        <div className='text-2xl m-5 text-pink-400'>
            Snehal's Creative Corner
        </div>

        <div className='text-pink-300'>
            <NavLink
             to="/" 
            className={({isActive}) =>
              isActive ? "text-blue-500" : "text-pink-300"
            }
           >Home</NavLink>
        </div>

        <div className='text-pink-300'>
            <NavLink to="/gallery"
            className={({isActive}) =>
              isActive ? "text-blue-500" : "text-pink-300"
            }>
               Gallery</NavLink>
        </div>

        <div className='text-pink-300'>
           <NavLink to="/about"
           className={({isActive}) =>
              isActive ? "text-blue-500" : "text-pink-300"
            }
           >About</NavLink>
        </div>

        <div className='text-pink-300'>
           <NavLink to="/contact"
           className={({isActive}) =>
              isActive ? "text-blue-500" : "text-pink-300"
            }
           >Contact</NavLink>
        </div>

         <div className='text-pink-300'>
           <NavLink to="/login"
           className={({isActive}) =>
              isActive ? "text-blue-500" : "text-pink-300"
            }
           >Login</NavLink>
        </div>

        <div className='text-pink-300'>
           <NavLink to="/signup"
           className={({isActive}) =>
              isActive ? "text-blue-500" : "text-pink-300"
            }
           >SignUp</NavLink>
        </div>

     </div>
     <Outlet/>
    </div>
  )
}

export default Layout