import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Modal from '../cart/Modal'; // Import Modal
import Cart from '../cart/Cart'; // Import Cart component

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <nav className="navbar">
        <h1>Vivek Restaurant</h1>
        <div className="nav-links">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Menu
          </NavLink>
          <NavLink
            to="/gallary"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Contact
          </NavLink>
          <button onClick={openModalHandler}>Cart</button>
        </div>
      </nav>
      {isModalOpen && (
        <Modal>
          <div className="cart">
            <Cart />
            <button onClick={closeModalHandler}>Close</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Navbar;
