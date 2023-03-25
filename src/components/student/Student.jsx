import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import CompanyCard from './CompanyCard'
import profilelogo from '../../assets/profile.svg'
import './student.css'


let bcard = [
    {
        name: "Baskin Robins",
        jobtitle: "Dispatcher",
        place: "kuk",
        src: "waited",
        pay: 450,
        rating: 3.9
    },
    {
        name: "Baskin Robins",
        jobtitle: "Dispatcher",
        place: "kuk",
        src: "waited",
        pay: 450,
        rating: 3.9
    },
    {
        name: "Baskin Robins",
        jobtitle: "Dispatcher",
        place: "kuk",
        src: "waited",
        pay: 450,
        rating: 3.9
    },
    {
        name: "Baskin Robins",
        jobtitle: "Dispatcher",
        place: "kuk",
        src: "waited",
        pay: 450,
        rating: 3.9
    },
    {
        name: "Baskin Robins",
        jobtitle: "Dispatcher",
        place: "kuk",
        src: "waited",
        pay: 450,
        rating: 3.9
    },
    {
        name: "Baskin Robins",
        jobtitle: "Dispatcher",
        place: "kuk",
        src: "waited",
        pay: 450,
        rating: 3.9
    }
]

let jobs = ["helper", "coder", "writing", "drawer", "worker"]
export default function Student() {
    return (
        <div>
            <div className='navbar '>

                <div className='d-flex'>
                    <img src={logo} width="50px" alt="" />
                    <div className='ms-3'>
                        <h2>KAM-PAY</h2>
                        <p>side hustle made easier</p>
                    </div>
                    <p></p>
                </div>

                <ul className='nav d-flex p-3'>
                    <li className='nav-item ms-5'><Link to="/">Home</Link></li>
                    <li className='nav-item ms-5'><Link to="/earning">Earnings</Link></li>
                    <li className='nav-item ms-5'><Link to="/appliedjobs">Applied Jobs</Link></li>
                    <li className='mx-5'><Link to="/profile"><img src={profilelogo}  alt="" /></Link></li>
                </ul>

            </div>

            <section className="search m-5">

                <div className='jobed'>
                   
                    <select name="jobs" id="jobs" >
                        <option value="select">select</option>
                        {jobs.map((job) => {
                            return <option value={job}>{job}</option>
                        })}
                    </select>

                    <input type="search" name="" id="jobsearch" />
                    
                    <select name="city" id="city" >
                        <option value="select">select</option>
                        {jobs.map((job) => {
                            return <option value={job}>{job}</option>
                        })}
                    </select>

                    <div className='searchbutton'>Find jobs {"->"}</div>
                </div>

            </section>

            <section className='d-flex'>
                <div className='filter'>
                        <p>filter and sort</p>
                </div>
                <div className="container d-flex flex-wrap">
                    {bcard.map((item) => {
                        return <CompanyCard
                            name={item.name}
                            place={item.place}
                            pay={item.pay}
                            rating={item.rating}
                            jobtitle={item.jobtitle}
                        />
                    })}
                </div>

            </section>
        </div>

    )
}
