import React, { useContext } from "react";
import { toast } from "react-toastify";
import { ProductsStore } from "../contexts/ProductsContext";

function AddNewProduct() {
  const { setProducts } = useContext(ProductsStore);
  function handleAddProduct(event) {
    event.preventDefault();
    const form = event.target;
    const product = {
      title: form.title.value,
      price: form.price.value,
      description: form.description.value,
      image: form.image.value,
      category: form.category.value,
    };

    fetch("http://localhost:3000/products", {
      method: "POST", // 1. Set the HTTP method
      headers: {
        "Content-Type": "application/json", // 2. Tell the server the payload format
        Accept: "application/json",
      },
      body: JSON.stringify(product), // 3. Convert Javascript object to JSON string
    })
      .then((res) => {
      return  res.json();
      })
      .then((json) => {
        toast.success("product added ");
        console.log(json);  
        setProducts((state) => [...state, json]);
        form.title.value=""
        form.price.value=""
        form.description.value=""
        form.image.value=""
      })
      .catch((e) => {
        toast.error("error");
        console.log(e);
      });
  }
  return (
    <div className="add-new-product">
      <h2>add new product</h2>
      <form action="" onSubmit={handleAddProduct}>
        <div>
          <label for="title">title:</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="price">price:</label>
          <input type="text" name="price" id="price" />
        </div>
        <div>
          <label htmlFor="image">image url:</label>
          <input type="text" name="image" id="image" />
        </div>
        <div>
          <label htmlFor="description">description:</label>
          <input type="text" name="description" id="description" />
        </div>
        <div>
          <label htmlFor="category">category:</label>
          <select name="category" id="category">
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
          </select>
        </div>
        <button type="submit">add product</button>
      </form>
    </div>
  );
}

export default AddNewProduct;
