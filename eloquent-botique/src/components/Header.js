import { Link } from "react-router-dom";
import { useCart } from "../contexts/useCart";
import { useItems } from "../contexts/ItemsContext";
import Cart from "./Cart";
import { useEffect, useRef } from "react";

export default function Header() {
  const { cartItemsCount, setCartOpen, cartOpen } = useCart();
  const { setSelectedCategory } = useItems();
  const cartContainerRef = useRef(null);
  useEffect(() => {
    // listen to scroll and close cart
    window.addEventListener("scroll", () => setCartOpen(false));
    window.addEventListener("click", (e) => {
      if (e.target.className === "cart") {
        setCartOpen(true);
      } else {
        setCartOpen(false);
      }
    });
  });
  return (
    <header className="main-header">
      <div className="logo">
        <h1>
          <Link
            className="logo-link"
            to="/"
            onClick={() => setSelectedCategory("")}
          >
            NobleWear Boutique
          </Link>
        </h1>
      </div>
      <div className="authentication-links">
        <Link className="login" to="/login">
          Login
        </Link>
        <Link className="signup" to="/signup">
          Signup
        </Link>
        {/* if cart is open close it, else open it */}
        <div
          className="cart"
          ref={cartContainerRef}
          onClick={() => setCartOpen((prev) => !prev)}
        >
          {cartItemsCount}
          <span className="cart">🛒</span>
          {cartOpen && <Cart />}
        </div>
      </div>
    </header>
  );
}
