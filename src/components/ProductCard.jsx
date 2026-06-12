import React from "react";
import useCart from "../hooks/useCart";
import { toast } from "react-toastify";

function ProductCard({ product }) {
  const {addToCart}=useCart()
  return (
    <div className="product-card">
      <img src={product.image} alt="" />
      <div>
        <h5>{product.title}</h5>
        <p>{product.price}</p>
        <div>
          <button onClick={()=>{addToCart(product)
            toast.success('product added to cart')
          }}>add to cart</button> <button>more details</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
