import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/sidebar.css'
import { MdOutlineDashboard } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import icon from "../Assets/usericon.svg"



const Sidebar = ({details}) => {
  return (
    <div className='Sidebar'>
        <div>
            <h1>supermarket</h1>
        </div>
        <div className='users'>
            <div>
                <img src={icon}></img>

            </div>
            <div className='details'>
                <h3>{details.firstName}</h3>
                <p>{details.designation}</p>
            </div>
           
        </div>
        <div className='dashboard'>
            <Link className="link" to={`/dashboard/${details.id}`}><span><MdOutlineDashboard /></span>Dashboard</Link>
            
        </div>
        <div className='payroll'>  
            <Link  className="link" to={`/payroll/${details.id}`}><span><RiMoneyDollarCircleLine/></span>Payroll</Link>

        </div>
        <div className='employees'>
            <Link className="link" to={`/employees/${details.id}`}><span><FaUsers/></span>Employees</Link>

        </div>
        <div className='logout'>
            <Link className="link" to="/"><span><RiLogoutCircleLine/></span>Logout</Link>

        </div>
    </div>
  )
}

export default Sidebar