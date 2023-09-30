import { Link } from "react-router-dom";
import { useCart } from "../contexts/useCart";
import { useItems } from "../contexts/ItemsContext";

export default function Header() {
  const { cartItemsCount, setCartOpen } = useCart();
  const { setSelectedCategory } = useItems();
  return (
    <header>
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
        <div className="cart" onClick={() => setCartOpen((prev) => !prev)}>
          {cartItemsCount}
          <span className="cart">🛍️</span>
        </div>
      </div>
    </header>
  );
}
