import React from 'react'
import './Contact.css'
import Navbar from '../navbar/Navbar'

const Contact = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className='img-contact-container'>
            <p className='heading-contact'>Contact Us</p>
            <img src='https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-contact'></img>
        </div>
        <div className='detials-contanier'>
            <div className='detials-contact'>
                <h1>Address</h1>
                <p>3rd floor, Vivek building, Near chowgan, Nahan, Sirmour, Himachal Pardesh </p>
            </div>
            <div className='detials-contact'>
                <h1>Email</h1>
                <p>vivekrestaurant@gmail.com</p>
            </div>
            <div className='detials-contact'>
                <h1>Mobile no</h1>
                <p>7807121965</p>
            </div>
             
        </div>
    </div>
  )
}

export default Contact