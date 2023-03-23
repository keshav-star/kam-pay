import { useState } from 'react'
import Footer from './components/Footer'
import { LandingNav, AdminNav, StudentNav, BusinessNav } from './components/Navbar'
import Home from './components/Home'
import './App.css'

function App() {

  return (
    <div className="App">

      {/* <LandingNav /> */}
      <Home/>
      {/* <AdminNav/> */}
      {/* <StudentNav/> */}
      {/* <BusinessNav/> */}

      <Footer/>

    </div>
  )
}

export default App
