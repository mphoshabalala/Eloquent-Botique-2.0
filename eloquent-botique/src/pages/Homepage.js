import React, { useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import ItemList from "../components/ItemList";
import Footer from "../components/Footer";
import { useCart } from "../contexts/useCart";
import Cart from "../components/Cart";

export default function Homepage() {
  const { cartOpen, setCartOpen } = useCart();
  useEffect(() => {
    // listen to scroll and close cart
    window.addEventListener("scroll", () => setCartOpen(false));
    window.addEventListener("click", (e) => {
      if (e.target.className !== "cart") {
        setCartOpen(false);
      }
    });

    //listen to mouseover cart button and display cart
    window.addEventListener("mouseover", (e) => {
      if (e.target.className === "cart") {
        setCartOpen(true);
      }
    });
  });
  return (
    <div>
      <Header />
      <Search />
      <ItemList />
      <Footer />
      {cartOpen && <Cart />}
    </div>
  );
}
