import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Collection from '../Pages/Collection'
import Luxries from '../Pages/Luxries'
import Sidebar from '../Components/SIdebar'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Recipt from "../Recipt _System/Recipt"
import Card from "../Components/Card"
import GridCard from '../Components/GridCard'
import AddtoCard from '../Components/AddtoCart'
import AppLayout from '../Components/AppLayout'
export default function Routing() {
  return (
    <div>
      <BrowserRouter>
      <AppLayout></AppLayout>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Watches/Collection' element={<Collection />}></Route>
          <Route path='/Collection/Luxry' element={<Luxries></Luxries>}></Route>
          <Route path='/Signup' element={<Signup />}></Route>
          <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/details/:id' element={<Card />} />
        <Route path='/detail/:id' element={<GridCard></GridCard>} />
        <Route path='/AddtoCart' element={<AddtoCard></AddtoCard>} />

          {/* Dashboard */}
          <Route path='/index/Analytics//Dashboard' element={<Sidebar></Sidebar>}></Route>
          <Route path='/index/Analytics/Sidebar/Dashboard' element={<Recipt></Recipt>}></Route>
        </Routes>


      </BrowserRouter>
    </div>
  )
}
