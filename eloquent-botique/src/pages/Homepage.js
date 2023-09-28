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
    window.addEventListener("scroll", () => setCartOpen(false));
    window.addEventListener("click", (e) => {
      if (e.target.className !== "cart") {
        setCartOpen(false);
      }
    });
    window.addEventListener("mouseover", (e) => {
      if (e.target.className === "cart") {
        setCartOpen(true);
      } else if (
        !e.target.className === "cart" ||
        !e.target.className === "cart-container"
      ) {
        setCartOpen(false);
      }
    });

    // window.addEventListener("mouseover", (e) => {

    // });
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
