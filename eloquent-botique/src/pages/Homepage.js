import React, { useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import ItemList from "../components/ItemList";
import Footer from "../components/Footer";
import { useCart } from "../contexts/useCart";
import Cart from "../components/Cart";

export default function Homepage() {
  return (
    <div>
      <Header />
      <Search />
      <ItemList />
      <Footer />
    </div>
  );
}
