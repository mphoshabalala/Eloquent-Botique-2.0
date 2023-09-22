import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import ItemList from "../components/ItemList";
import Footer from "../components/Footer";
import { useCart } from "../hooks/useCart";
import Cart from "../components/Cart";

export default function Homepage() {
  const { cartOpen } = useCart();

  return (
    <div>
      <Header />
      <Search />
      <ItemList />
      {}
      <Footer />
      {cartOpen && <Cart />}
    </div>
  );
}
