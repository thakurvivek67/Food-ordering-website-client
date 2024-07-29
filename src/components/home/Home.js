import React from "react";

import "./Home.css";
import Navbar from "../navbar/Navbar";

const Home = () => {
  return (
    <div>
     <Navbar></Navbar>
      <img
        src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg"
        width={1500}
        height={400}
        alt="Restaurant Background"
      />
      <div className="welcome">
        <div className="welcome-text">
          <h2>Welcome to Vivek Restaurant</h2>
          <p>
            India Restaurant has been serving delightful experiences through the
            art of cooking for four decades. A cozy, relaxing space combined with
            flavourful dishes makes it a first choice for every foodie in town. It
            provides a wide range of items to choose from and lets everyone
            indulge in an experience of pleasing their taste buds. We provide a
            wide range of cuisines and dishes to choose from so that every foodie
            in town has their best experience here. We are known to be the best
            Mughlai eatery in Kolkata. We have always won the hearts of our
            customers with appetizing dishes and friendly behaviour. It is the
            best choice for everyone who wants to enjoy the best quality food at
            reasonable prices.
          </p>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813_1280.jpg"
          width={300}
          height={300}
          alt="Food"
        />
      </div>
    </div>
  );
};

export default Home;
