import { useState } from 'react'
import CompanyCard from './components/CompanyCard'
import section1 from './assets/1st.svg'
import boy1 from './assets/boy1.svg'
import boy2 from './assets/boy2.png'
import { LandingNav, AdminNav, StudentNav, BusinessNav } from './components/Navbar'
import './App.css'

function App() {

  return (
    <div className="App">

      <LandingNav />
      {/* <AdminNav/> */}
      {/* <StudentNav/> */}
      {/* <BusinessNav/> */}

      <section className='m-5 d-flex justify-content-center student'>
        <div>
          <h1>Part-Time Jobs </h1>
          <h1>for students</h1>
          <p>looking for flexible work options?</p>
          <p>Kam-Pay makes it easy to find and apply for the best part-time</p>
          <p>job opportunities in your area. Start your job search now!</p>
          <button className='rounded-pill fs-4 btn btn-outline-secondary px-4'>Join Now</button>
        </div>
        <div className='position-relative'>
          <img className='position-absolute start-50' src={boy1} alt="" />
          <img src={section1} alt="" />
        </div>
      </section>
      <section className='m-5 d-flex justify-content-space-around student'>
        <img src={boy2} alt="" />
        <div></div>
        <div>
          <h1>Part-Time Jobs </h1>
          <h1>for students</h1>
          <p>looking for flexible work options?</p>
          <p>Kam-Pay makes it easy to find and apply for the best part-time</p>
          <p>job opportunities in your area. Start your job search now!</p>
          <button className='rounded-pill fs-4 btn btn-outline-secondary px-4'>Join Now</button>
        </div>

      </section>
      <section>
        <CompanyCard />
      </section>

      <footer>

      </footer>
    </div>
  )
}

export default App
