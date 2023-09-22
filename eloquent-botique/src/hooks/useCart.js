import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const ItemsInLocalStorage = JSON.parse(localStorage.getItem("addedToCart"));
    return ItemsInLocalStorage || [];
  });

  const [isInCart, setIsInCart] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  function checkIfIsInCart(item) {
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id); //check if item exist
    if (isItemInCart) setIsInCart(true);
    else setIsInCart(false);
  }

  function deleteItemFromCart(item) {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("addedToCart", JSON.stringify(updatedCartItems));
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
    } else {
      // If item is not in cart, add it

      setCartItems((cartItems) => [...cartItems, item]);
      localStorage.setItem("addedToCart", JSON.stringify([...cartItems, item]));
    }
    setIsInCart(!isInCart);
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
