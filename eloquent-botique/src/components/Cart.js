import React from "react";
import { useCart } from "../contexts/useCart";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, deleteItemFromCart } = useCart();

  return (
    <div className="cart-container">
      {cartItems.length > 0 ? (
        cartItems.map((cartItem) => (
          <div className="main-item" key={cartItem.id}>
            <Link
              to={{
                pathname: `/${cartItem.id}`,
                search: `?title=${encodeURIComponent(cartItem.title)}`,
              }}
              className="cart-item-name"
            >
              {cartItem.title}
            </Link>
            <div className="delete-container">
              <p
                className="cart-delete"
                // handle item delete from cart
                onClick={() => deleteItemFromCart(cartItem)}
              >
                🚮
              </p>
              <p>
                R{(cartItem.price - (cartItem.price * 10) / 100)?.toFixed(2)}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="empty-cart">
          <h3>Your cart is empty, select products to add to cart</h3>
        </div>
      )}
    </div>
  );
}
