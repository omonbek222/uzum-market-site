import React, { createContext, useState } from "react";

// Savat konteksti
export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Mahsulotni savatchaga qo'shish
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Mahsulotni savatchadan o'chirish
  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item !== product));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
