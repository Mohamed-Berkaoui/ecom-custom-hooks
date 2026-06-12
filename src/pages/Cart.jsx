import React from "react";
import useCart from "../hooks/useCart";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart } = useCart();
  return (
    <div className="cart-container">
      <h2>shopping cart</h2>
      {cart.length > 0 ? (
        <div className="cart-items-list">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", color: "#999", fontSize: "1.1rem" }}>
          Your cart is empty
        </p>
      )}
      <h2>
        total:{cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)}
      </h2>
    </div>
  );
}

export default Cart;
