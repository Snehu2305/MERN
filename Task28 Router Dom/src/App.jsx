import { useState } from 'react'
import { Routes, Route, NavLink } from "react-router-dom";

import {Home, About, Contact, Gallery, Artwork, Layout, Login, SignUp} from '../components/index'
import Dashboard from '../components/Dashboard';
import ProtectRoute from '../components/ProtectRoute';


function App() {

  const[isLoggedIn, setIsLoggedIn] = useState(false);
  
  console.log("isLoggedIn: ", isLoggedIn)
  return (
    <>
      

      <Routes>
       <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='gallery' element={<Gallery/>}/>
          <Route path='gallery/:id' element={<Artwork/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path='signup' element={<SignUp/>}/>
          <Route path='dashboard' element={
            <ProtectRoute isLoggedIn={isLoggedIn}
                          setIsLoggedIn={setIsLoggedIn}>
              <Dashboard/>
            </ProtectRoute>
          }
          />

       </Route>
      </Routes>
    </>
  )
}

export default App
