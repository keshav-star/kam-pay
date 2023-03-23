import React from 'react'
import logo from '../assets/logo.png'
import boy1 from '../assets/boy1.png'
import boy2 from '../assets/boy2.png'
import vector from '../assets/vector.svg'
export default function Home() {
    return (
        <div>
            <div className='navbar p-3 '>
                <div className='d-flex'>
                    <img src={logo} width="50px" alt="" />
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
                    <li className='nav-item join mx-5'>Join Us </li>
                </ul>
            </div>
            <section className='sec'>
                <div className="sec-content">
                    <h1>Part-Time Jobs </h1>
                    <h1>for students</h1>
                    <div>looking for flexible work options?<br />
                        Kam-Pay makes it easy to find and apply for the best part-time <br /> job opportunities in your area. Start your job search now!</div>
                    <button className='rounded-pill fs-5 btn btn-secondary px-4'>Join Now <img src={vector} alt="" /></button>
                </div>
                <div className='sec-image' >
                    <img src={boy1} alt="" />
                </div>
            </section>
            <section className='sec'>
                <div className='sec-image' >
                    <img src={boy2} alt="" />
                </div>
                <div></div>
                <div className="sec-content">
                    <h1>How It works ? </h1>
                    <div>KAM-PAY verifies nearby brand or business, ensuring a safe and <br /> genuine working environment for students.</div>
                    <div>Also, it verify the student status using SheerID, <br /> so that transparency lies on both ends</div>
                    <button className='rounded-pill fs-5 btn btn-secondary px-4'>Know more<i className="fa-solid fa-arrow-right"></i> </button>
                </div>

            </section>
        </div>
    )
}


