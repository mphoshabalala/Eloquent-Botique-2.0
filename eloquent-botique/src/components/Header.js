import { Link } from "react-router-dom";
import { CartProvider, useCart } from "../hooks/useCart";

export default function Header() {
  const { cartItemsCount, setCartOpen } = useCart();
  return (
    <header>
      <div className="logo">
        <h1>
          <Link className="logo-link" to="/">
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
        <div className="cart" onClick={() => setCartOpen((prev) => !prev)}>
          {cartItemsCount}
          <span>🛍️</span>
        </div>
      </div>
    </header>
  );
}
