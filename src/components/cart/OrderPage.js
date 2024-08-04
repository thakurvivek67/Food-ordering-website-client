import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../store/CartSlice';
import './OrderPage.css'; 

const OrderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.amount * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('https://restaurant-472a5-default-rtdb.firebaseio.com/orders.json', {
        cartItems,
        userDetails,
        totalAmount,
      });

      dispatch(cartActions.clearCart()); // Clear the cart
      alert('Order placed successfully!');
      navigate('/home'); // Redirect to the home page
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place the order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='order-page'>
      <h2>Order Summary</h2>
      <ul className='order-list'>
        {cartItems.map((item, index) => (
          <li key={index} className='order-item'>
            <h3>{item.name}</h3>
            <p>Ingredients: {item.ingredients}</p>
            <p>Amount: ${item.amount}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${item.amount * item.quantity}</p>
          </li>
        ))}
      </ul>
      <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>

      <form onSubmit={handleSubmit} className='order-form'>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={userDetails.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type='email'
            name='email'
            value={userDetails.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Mobile:
          <input
            type='tel'
            name='mobile'
            value={userDetails.mobile}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Address:
          <textarea
            name='address'
            value={userDetails.address}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Placing Order...' : 'Order Now'}
        </button>
      </form>
    </div>
  );
};

export default OrderPage;
