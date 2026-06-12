import React, { createContext, useContext, useState } from "react";

export const CartStore = createContext();

function CartContext({ children }) {
  const [cart, setCart] = useState([]);
  function addToCart(product) {
    const existProd = cart.find((item) => item.id == product.id);
    if (existProd) {
      setCart(
        cart.map((item) =>
          item.id == product.id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }
  function incProductQty(product) {
    setCart(
      cart.map((item) =>
        item.id == product.id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  }
  function decProductQty(product) {
    setCart(
      cart.map((item) =>
        item.id == product.id
          ? item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
          : item,
      ),
    );
  }
  function removeFromCart(product) {
    setCart(cart.filter((item) => item.id != product.id));
  }
  return (
    <CartStore.Provider
      value={{ cart, addToCart, removeFromCart, incProductQty, decProductQty }}
    >
      {children}
    </CartStore.Provider>
  );
}

export default CartContext;


