import React from 'react'
import logo from '../assets/logo.png'

export function LandingNav() {
  return (
    <div className='navbar p-3 '>
      <div className='d-flex'>
      <img src={logo} width="35px" alt="" />
      <div className='ms-3'>
      <h2>KAM-PAY</h2>
      <p>life is better with it</p>
      </div>
      <p></p>
      </div>
      <ul className='nav d-flex p-3'>
        <li className='nav-item ms-5'>Home</li>
        <li className='nav-item ms-5'>Business</li>
        <li className='nav-item ms-5'>Student</li>
        <li className='nav-item join mx-5'>Join Us</li>
      </ul>
    </div>
  )
}

export function AdminNav() {
  return (
    <nav>
      <div className='left'>
        <div>Home</div>
        <div>Business</div>
        <div>Student</div>
        <div>About Us</div>
      </div>
      <div className='right'>
        <input type="search" name="search" id="searchBar" placeholder='Type to search' />
      </div>
    </nav>
  )
}
export function BusinessNav() {
  return (
    <nav>
      <div className='left'>
        <div>Home</div>
        <div>My Requests</div>
        <div>History</div>
        <div>About Us</div>
      </div>
      <div className='right'>
        <input type="search" name="search" id="searchBar" placeholder='Type to search' />
        <div>bell</div>
        <div>profile</div>
      </div>
    </nav>
  )
}
export function StudentNav() {
  return (
    <nav>
      <div className='left'>
        <div>Home</div>
        <div>My works</div>
        <div>New Requests</div>
        <div>About Us</div>
      </div>
      <div className='right'>
        <input type="search" name="search" id="searchBar" placeholder='Type to search' />
        <div>bell</div>
        <div>profile</div>
      </div>
    </nav>
  )
}
