import React from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
         <nav className="navbar">
        <h1>Vivek Restaurant</h1>
        <div className="nav-links">
        <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Menu
          </NavLink>
          <NavLink
            to="/gallary"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar