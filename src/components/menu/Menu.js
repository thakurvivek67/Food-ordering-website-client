import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import { useDispatch} from "react-redux";
import "./Menu.css";
import { menuActions } from "../store/MenuSlice";
import { cartActions } from "../store/CartSlice";

const Menu = () => {
  const dispatch = useDispatch();
 // const cartItems = useSelector((state) => state.cart);

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
        const menuArray = Object.values(data);
        setMenu(menuArray);
        setFilteredMenu(menuArray);
        dispatch(menuActions.setMenu(menuArray));
        dispatch(menuActions.setFilteredMenu(menuArray));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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
    setSelectedCategory(event.target.value);
  };

  // Handle add to cart
  const handleAddToCart = (item) => {
    return () => {
      dispatch(cartActions.addToCart(item));
    };
  };

  return (
    <div>
      <div className="contanierM">
        <Navbar />

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
                <p className="listI">{item.id}</p>
                <h2 className="list-heading">{item.name}</h2>
                <p className="listI">Ingredients: {item.ingredients}</p>
                <p className="listA">Amount: ${item.amount}</p>
                <img
                  src={item.img}
                  alt={item.name}
                  width="100"
                  className="imgM"
                />
                <button type="button" className="btn-list" onClick={handleAddToCart(item)}>Add to Cart</button>
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

