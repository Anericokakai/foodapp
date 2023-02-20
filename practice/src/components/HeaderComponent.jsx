import React from "react";
import './styles.css';
import logo from '../Images/logo.jpg'
import profile from '../Images/member-2.png'
import { Link } from "react-router-dom";
import { useState } from "react";
export function HeaderFunction() {
  
    const[btnState,setBtnState]=useState(false);
    const handleClick=()=>{

        btnState ?setBtnState(false):setBtnState(true);
        
    }

  return (
    <div>
        <i className="fa-solid fa-bars" onClick={handleClick}></i>
        <nav  id="navigation" className={ btnState ?'menu':'' } >
           <div className="xmarkcontainer"onClick={handleClick}>
           
           </div>
            <div className="logo">
                <img src={logo} alt="" />
                <h1>smart foods</h1>
            </div>
            
            
            <ul className="ul">
                <Link to='/' className="navlinks">
                <div className="singlenav">
                    <i className="fa-solid fa-hotel"></i>
                    <p>home</p>
                </div></Link>
                <Link to="/menu" className="navlinks">
                <div className="singlenav">
                    <i className="fa-solid fa-utensils"></i>
                    <p>food & drinks</p>
                </div></Link>
                <a  className="navlinks">
                <div className="singlenav">
                    <i className="fa-solid fa-box-open"></i>
                    <p>view cat</p>
                </div></a>
                <a  className="navlinks">
                <div className="singlenav">
                    <i className="fa-solid fa-bolt"></i>
                    <p>instant order</p>
                </div></a>
                <a  className="navlinks">
                <div className="singlenav">
                    <i className="fa-solid fa-phone"></i>
                    <p>dashboard</p>
                </div></a>
               
               
            </ul>
            <div className="clentcard">
              <div className="profile">
                <img src={profile} alt="" />
              </div>
                <h4>anerico kakai</h4>
                <p><strong>status :</strong> active</p>
                <button className="profilebtn">view profile</button>
            </div>
            
        </nav>
    </div>
 
  );
}
