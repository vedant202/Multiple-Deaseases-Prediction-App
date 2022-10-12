import React, { Component } from 'react'
import logo from "./wb_logo.jpg"
import "./Navbar.css"
import { Outlet, Link } from "react-router-dom";


export default class Navbar extends Component {
  render() {
    return (
        <>
            <nav className='Navbar'>
                <img className='logo' src={logo} alt="" ></img>
                <ul className='nav_links'>
                    <li><a href='/'>Home</a></li>
                    <li>
                      <div className='dropdown'>
                        <button className='dropBtn'>Services</button>
                        <div className='dropdown-content'>
                        <a href="/diabetes">Diabetes Prediction</a>
                        <a href="/kidney">Kidney Diseases Prdeiction</a>
                        <a href="/heart">Heart Diseases prdeiction</a>
                        <a href="/parkinsons">Parkinsons Diseases prdeiction</a>
                        </div>
                      </div>
                    </li>
                    <li><a href='/about'>About</a></li>
                </ul>
                <a className='contactButton' href='/contact'><button>Contact</button></a>
            </nav>
            <hr />
            <Outlet />
        </>
      
    )
  }
}
