import React, { useEffect } from "react";
import { useItems } from "../contexts/ItemsContext";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/useCart";

export default function ItemList() {
  const { searchedItems, isLoading } = useItems();
  const { checkIfIsInCart } = useCart();
  if (isLoading)
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  return (
    <div className="list">
      {searchedItems.map((item) => (
        <Link
          onClick={() => checkIfIsInCart(item)}
          key={item.id}
          // go to the given item's id
          to={{
            pathname: `${item.id}`,
            search: `?title=${encodeURIComponent(item.title)}`,
          }}
        >
          <CardItem item={item} />
        </Link>
      ))}
    </div>
  );
}
