import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import './Menu.css';

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://restaurant-472a5-default-rtdb.firebaseio.com/menu.json"
        );
        const data = response.data;

        // Convert object to array if necessary
        const menuArray = Object.values(data);
        setMenu(menuArray);
        setFilteredMenu(menuArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filter menu based on selected category
  useEffect(() => {
    if (selectedCategory) {
      setFilteredMenu(
        menu.filter((item) => item.category === selectedCategory)
      );
    } else {
      setFilteredMenu([]);
    }
  }, [selectedCategory, menu]);

  // Handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="contanierM">
      <Navbar></Navbar>
      
      <div className="photo-contanier">
      <h1 className="headingM">Our Menu</h1>
      <img src="https://cdn.pixabay.com/photo/2024/05/10/10/51/ai-generated-8752890_1280.jpg"></img>
      </div>
      <select onChange={handleCategoryChange} value={selectedCategory} className="selectM">
        <option value="" className="optionM">Select a category</option>
        <option value="appetizer"className="optionM">Appetizers</option>
        <option value="desserts"className="optionM">Desserts</option>
        <option value="main courses"className="optionM">Main Course</option>
      </select>

      <div className="contanierL">
      {selectedCategory && (
        <ul className="contanier-list">
          {filteredMenu.map((item, index) => (
            <li key={index} className="menu-list">
              <h2 className="list-heading">{item.name}</h2>
              <p className="listI">Ingredients: {item.ingredients}</p>
              <p className="listA">Amount: ${item.amount}</p>
              <img src={item.img} alt={item.name} width="100" className="imgM" />
            </li>
          ))}
        </ul>
      )}
        
      </div>

     
    </div>
  );
};

export default Menu;
