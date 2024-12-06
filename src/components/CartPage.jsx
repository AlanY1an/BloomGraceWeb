import React from 'react';
import './css/cart.css'; 

const CartPage = ({ cart, updateCartQuantity}) => {
  console.log(cart);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <main className="cart main-content">
      <div className="content-wrapper cart-wrapper">
        <div className="cart__header section__header">
          <h2 className="cart__title section__header-title">Shopping Cart</h2>
          <hr className="hr" />
        </div>

        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item__image-wrapper">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item__image"
                />
              </div>
              <div className="cart-item__details">
                <h3 className="cart-item__name">{item.name}</h3>
                <p className="cart-item__price">Price: ${item.price}</p>
                <div className="cart-item__quantity">
                  <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    value={item.quantity}
                    className="cart-item__input"
                    onChange={(e) =>
                      updateCartQuantity(item.id, parseInt(e.target.value, 10))
                    }
                  />
                </div>
                <p className="cart-item__subtotal">
                  Subtotal: ${item.price * item.quantity}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="cart__empty">Your cart is empty!</p>
        )}

        {cart.length > 0 && (
          <div className="cart__footer">
                <p className="cart-item__total">
                  Total: ${total}
                </p>
            <button className="button-standard cart__checkout-btn">Checkout</button>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;
