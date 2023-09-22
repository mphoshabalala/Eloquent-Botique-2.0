import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useItems } from "../contexts/ItemsContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../hooks/useCart";
import Cart from "../components/Cart";

export default function ItemDetails() {
  const { handleAddToCart, isInCart, cartOpen } = useCart();
  const location = useLocation();
  const itemId = location.pathname.split("/").pop();
  const { getItem, currentItem, isLoading } = useItems();

  useEffect(() => {
    getItem(itemId);
  }, [itemId]);

  return (
    <>
      <Header />
      <div className="item-container">
        {isLoading ? (
          <div className="loading">
            <h1>Loading...</h1>
          </div>
        ) : currentItem ? (
          <div>
            <div className="main-box">
              <div className="description">
                <div className="image-container">
                  <img src={currentItem.image} alt="" />
                </div>
                <div className="main-description">
                  <h2>{currentItem.title}</h2>
                  <p className="item-description">{currentItem.description}</p>
                </div>
              </div>
              <div className="prices-details">
                <div className="price-box-1">
                  <h1>
                    R
                    {(
                      currentItem.price -
                      (currentItem.price * 10) / 100
                    )?.toFixed(2)}
                  </h1>
                  {currentItem.price > 100 && <h5>FREE DELIVERY</h5>}
                  <p className="discounted-price">
                    R{currentItem.price?.toFixed(2)}
                  </p>
                  <p>10% OFF</p>
                  <p className="installments">
                    Pay 4 <span>interest-free</span> installments of R
                    {(
                      (currentItem.price - (currentItem.price * 10) / 100) /
                      4
                    )?.toFixed(2)}
                    using <a href="">EasyPurchase</a>
                  </p>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(currentItem)}
                  >
                    <span>👜</span>
                    {isInCart ? "Item Added ✅" : "Add to cart"}
                  </button>
                </div>
                <div className="reviews">
                  <h2>Reviews</h2>
                  <div>
                    <p>
                      <span>⭐</span>
                      {currentItem.rating?.rate}
                      <a href=""> {currentItem.rating?.count} Reviews</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p>Item not found.</p>
          </div>
        )}
      </div>
      <Footer />
      {cartOpen && <Cart />}
    </>
  );
}
