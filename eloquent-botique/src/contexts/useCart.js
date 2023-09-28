import { createContext, useContext, useEffect, useState } from "react";
import { useItems } from "./ItemsContext";
// import { useItems } from "./ItemsContext";

const CartContext = createContext();

export function CartProvider({ children }) {
  // get cart items from local storage
  const [cartItems, setCartItems] = useState(() => {
    const ItemsInLocalStorage = JSON.parse(localStorage.getItem("addedToCart"));
    return ItemsInLocalStorage || [];
  });
  const [isInCart, setIsInCart] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { currentItem } = useItems();

  function checkIfIsInCart(item) {
    try {
      const isItemInCart = cartItems.some(
        (cartItem) => cartItem.id === item.id
      ); //check if item exist
      setIsInCart(isItemInCart);
    } catch (err) {
      console.log(err);
    }
  }

  function deleteItemFromCart(item) {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("addedToCart", JSON.stringify(updatedCartItems));

    // check if theres item that is currently open, and if it is in cart
    if (currentItem && currentItem.id === item.id) {
      setIsInCart(false);
    }
  }

  function handleAddToCart(item) {
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id); //check if item exist
    if (isItemInCart) {
      // If item is already in cart, remove it
      const updatedCartItems = cartItems.filter(
        (cartItem) => cartItem.id !== item.id
      );
      setCartItems(updatedCartItems);
      localStorage.setItem("addedToCart", JSON.stringify(updatedCartItems));
      setIsInCart(false);
    } else {
      // If item is not in cart, add it

      setCartItems((cartItems) => [...cartItems, item]);
      localStorage.setItem("addedToCart", JSON.stringify([...cartItems, item]));
      setIsInCart(true);
    }
  }

  const cartItemsCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        handleAddToCart,
        cartItemsCount,
        checkIfIsInCart,
        isInCart,
        cartItems,
        setCartOpen,
        cartOpen,
        deleteItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
