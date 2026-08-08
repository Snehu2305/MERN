import { useState } from 'react'
import { Routes, Route, NavLink } from "react-router-dom";
// import Home from '../components/Home'
// import Contact from '../components/Contact'
// import About from '../components/About'
// import Gallery from '../components/Gallery'
// import Artwork from '../components/Artwork';

import {Home, About, Contact, Gallery, Artwork, Layout} from '../components/index'


function App() {
  

  return (
    <>
      

      <Routes>
       <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='gallery' element={<Gallery/>}/>
          <Route path='gallery/:id' element={<Artwork/>}/>
          <Route path='contact' element={<Contact/>}/>

       </Route>
      </Routes>
    </>
  )
}

export default App
