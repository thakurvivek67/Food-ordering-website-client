import React from "react";
import Navbar from "../navbar/Navbar";
import "./About.css";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <p className=" heading-about">About Us</p>
        <img
          src="https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        ></img>
      </div>

      <p className="about-context">
        Vivek was started in the year 2010 by the Vivek Group of Restaurants.
        Vivek serves freshest ingredients with the finest taste. Our chefs fuse
        together flavor and aroma to capture the essence of the traditional
        North Indian cuisine. Vivek has become synonymous with Authentic
        Vegetarian Barbecue & North Indian Cuisine. The Vivek chain epitomizes
        the royal experience in flavour, aroma and purity. It was first of its
        kind as it introduced the unique ” do it yourself ” concept in dining.
        Vivek's dining experience comes complete with a grill at the centre of
        the table and variety of starters skewered and ready for the guests to
        marinate according to taste and then grill or roast to perfection. This
        customized dining has been getting a stupendous response from
        connoisseurs of good food. In fact Vivek has established a stellar
        customer base that speaks of its popularity.
      </p>
    </div>
  );
};

export default About;
