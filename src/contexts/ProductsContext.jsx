import React, { createContext, useEffect, useState } from "react";

export const ProductsStore = createContext();
function ProductsContext({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <ProductsStore.Provider value={{products,setProducts}}>{children}</ProductsStore.Provider>
  );
}

export default ProductsContext;
