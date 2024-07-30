import React from 'react';
import Navbar from '../navbar/Navbar';
import './Gallary.css';

const Gallary = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='contanier-mainphoto'>
        <img 
          className='img-g1' 
          src='https://images.pexels.com/photos/574111/pexels-photo-574111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
          alt='Main Gallery' 
        />
        <div className='heading-overlay'>
          <p>Our Gallery</p>
        </div>
      </div>

      <div className='contanier-gallary'>
        <img 
          className='img-g' 
          src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
          alt='Gallery Image 1' 
        />
        <img 
          className='img-g' 
          src='https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
          alt='Gallery Image 2' 
        />
        <img 
          className='img-g' 
          src='https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
          alt='Gallery Image 3' 
        />
        <img 
          className='img-g' 
          src='https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
          alt='Gallery Image 4' 
        />
        <img 
          className='img-g' 
          src='https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
          alt='Gallery Image 5' 
        />
        <img 
          className='img-g' 
          src='https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
          alt='Gallery Image 6' 
        />
        <img 
          className='img-g' 
          src='https://images.pexels.com/photos/842545/pexels-photo-842545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
          alt='Gallery Image 7' 
        />
        <img 
          className='img-g' 
          src='https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
          alt='Gallery Image 8' 
        />
      </div>
    </div>
  );
}

export default Gallary;
