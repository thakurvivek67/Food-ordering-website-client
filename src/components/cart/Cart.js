import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/CartSlice';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrease = (item) => {
    dispatch(cartActions.increaseQuantity(item));
  };

  const handleDecrease = (item) => {
    dispatch(cartActions.decreaseQuantity(item));
  };

  const handleRemove = (item) => {
    dispatch(cartActions.removeFromCart(item));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.amount * item.quantity, 0);

  return (
    <div className='cart-content'>
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <ul className='cart-list'>
          {cartItems.map((item, index) => (
            <li key={index} className='cart-item'>
              <h3>{item.name}</h3>
              <p>Ingredients: {item.ingredients}</p>
              <p>Amount: ${item.amount}</p>
              <p>Quantity: {item.quantity}</p>
              <img src={item.img} alt={item.name} width="100" className="cart-img" />
              <button onClick={() => handleIncrease(item)}>+</button>
              <button onClick={() => handleDecrease(item)}>-</button>
              <button onClick={() => handleRemove(item)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
      <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      <button>Place Order</button>
    </div>
  );
};

export default Cart;
