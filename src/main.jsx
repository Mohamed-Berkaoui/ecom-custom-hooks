import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import ProductsContext from "./contexts/ProductsContext.jsx";
import CartContext from "./contexts/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <ProductsContext>
    <CartContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartContext>
  </ProductsContext>,
);
