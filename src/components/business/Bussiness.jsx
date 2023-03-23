import React from 'react'
import Bdata from '../../Data/Business.json'
export default function Bussiness() {
  return (
    <>
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
          <li className='nav-item ms-5'>My requests</li> {/* will provide create, previous,pending */}
          {/* <li className='nav-item ms-5'>History</li> */}
          <div>
            <li className='nav-item join mx-5'>Profile</li>
            <i class="fas fa-accessible-icon fa-solid fa-user"></i>
          </div>
        </ul>
      </div>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Hey there!</strong> Check out the new openings added.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>


    </>
  )
}
