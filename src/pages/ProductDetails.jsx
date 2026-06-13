import React, { use, useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router";
import { ProductsStore } from "../contexts/ProductsContext";
import { toast } from "react-toastify";
import useCart from "../hooks/useCart";
import ProductCard from "../components/ProductCard";

function ProductDetails() {
  // const location =useLocation()
  // console.log("🚀 ~ ProductDetails ~ location:", location)
  //   const product = products.find((item) => item.id == productId);
  const { products } = useContext(ProductsStore);
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const { addToCart } = useCart();
  const navigate=useNavigate()
  useEffect(() => {
    fetch("http://localhost:3000/products/" + productId)
      .then((res) =>{
        window.scrollTo(0,0)
        return res.json()})
      .then(setProduct)
      .catch((e) => toast.error("error"));

  }, [productId]);

  if (!product) {
    return <h1>loading</h1>;
  }
  return (
    <div className="product-details">
      <div>
        <h1>product details</h1>
        {/* <Link to={"/"}><button >back</button></Link> */}
        <button onClick={()=>navigate(-1)}>back</button>
      </div>
      <div className="details">
        <img src={product.image} alt="" />
        <h2>{product.title}</h2>
        <h6>{product.description}</h6>
        <p>{product.price}</p>
        <p>{product.category}</p>
        <button
          onClick={() => {
            addToCart(product);
            toast.success("product added to cart");
          }}
        >
          add to cart
        </button>
      </div>
      <div className="similar-products" >
          {products.filter(item=>item.category==product.category&&item.id!=product.id).map(item=><ProductCard product={item}/>)}
      </div>
    </div>
  );
}

export default ProductDetails;
