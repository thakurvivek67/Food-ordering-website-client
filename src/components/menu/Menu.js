import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import "./Menu.css";
import { menuActions } from "../store/MenuSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check localStorage for menu data
        const storedMenu = localStorage.getItem('menu');
        if (storedMenu) {
          const menuArray = JSON.parse(storedMenu);
          setMenu(menuArray);
          setFilteredMenu(menuArray);
          dispatch(menuActions.setMenu(menuArray));
          dispatch(menuActions.setFilteredMenu(menuArray));
        } else {
          const response = await axios.get(
            "https://restaurant-472a5-default-rtdb.firebaseio.com/menu.json"
          );
          const data = response.data;
          const menuArray = Object.values(data);
          setMenu(menuArray);
          setFilteredMenu(menuArray);
          dispatch(menuActions.setMenu(menuArray));
          dispatch(menuActions.setFilteredMenu(menuArray));

          // Store menu data in localStorage
          localStorage.setItem('menu', JSON.stringify(menuArray));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Retrieve selected category from localStorage
    const storedCategory = localStorage.getItem('selectedCategory');
    if (storedCategory) {
      setSelectedCategory(storedCategory);
    }
  }, [dispatch]);

  // Filter menu based on selected category
  useEffect(() => {
    if (selectedCategory) {
      setFilteredMenu(
        menu.filter((item) => item.category === selectedCategory)
      );
    } else {
      setFilteredMenu(menu);
    }
  }, [selectedCategory, menu]);

  // Handle category change
  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);

    // Store selected category in localStorage
    localStorage.setItem('selectedCategory', newCategory);
  };

  return (
    <div>
      <div className="contanierM">
        <Navbar></Navbar>

        <div className="photo-contanier">
          <h1 className="headingM">Our Menu</h1>
          <img src="https://cdn.pixabay.com/photo/2024/05/10/10/51/ai-generated-8752890_1280.jpg" alt="Menu" />
        </div>
        <select
          onChange={handleCategoryChange}
          value={selectedCategory}
          className="selectM"
        >
          <option value="" className="optionM">
            Select a category
          </option>
          <option value="appetizer" className="optionM">
            Appetizers
          </option>
          <option value="desserts" className="optionM">
            Desserts
          </option>
          <option value="main courses" className="optionM">
            Main Course
          </option>
        </select>
      </div>

      <div className="contanierL">
        {filteredMenu.length > 0 ? (
          <ul className="contanier-list">
            {filteredMenu.map((item, index) => (
              <li key={index} className="menu-list">
                <h2 className="list-heading">{item.name}</h2>
                <p className="listI">Ingredients: {item.ingredients}</p>
                <p className="listA">Amount: ${item.amount}</p>
                <img
                  src={item.img}
                  alt={item.name}
                  width="100"
                  className="imgM"
                />
                <button type="submit" className="btn-list">Add to Cart</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items to display</p>
        )}
      </div>
    </div>
  );
};

export default Menu;
