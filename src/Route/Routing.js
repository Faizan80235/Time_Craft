import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "../Components/Header"
import Home from '../Pages/Home'
import About from '../Pages/About'
import Collection from '../Pages/Collection'
import Luxries from '../Pages/Luxries'
import Sidebar from '../Components/SIdebar'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
export default function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Watches/Collection' element={<Collection />}></Route>
          <Route path='/Collection/Luxry' element={<Luxries></Luxries>}></Route>
          <Route path='/Signup' element={<Signup />}></Route>
          <Route path='/Login' element={<Login></Login>}></Route>
          {/* Dashboard */}
          <Route path='/index/Analytics/Sidebar/Dashboard' element={<Sidebar></Sidebar>}></Route>
        </Routes>


      </BrowserRouter>
    </div>
  )
}
