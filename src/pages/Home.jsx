import React, { useContext } from "react";
import { ProductsStore } from "../contexts/ProductsContext";
import ProductCard from "../components/ProductCard";

function Home() {
  const  {products}  = useContext(ProductsStore);
  return (
    <div className="Home">
      <div>
        {products.map((item) => (
          <ProductCard product={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
