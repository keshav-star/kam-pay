import { useState } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import { LandingNav, AdminNav, StudentNav, BusinessNav } from './components/Navbar'
import Home from './components/Home'
import Student from './components/student/Student'
import Business from './components/business/Bussiness'
import './App.css'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/student' element={<Student />} />
        <Route path='/business' element={<Business />} />
        <Route path='/joinus' element={<Home />} />
      </Routes>

      <Footer />
    </HashRouter>
  )
}

export default App
