import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import AddNewProduct from "./pages/AddNewProduct";
import { ToastContainer } from "react-toastify";
import ProductDetails from "./pages/ProductDetails";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:productId" element={<ProductDetails />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="add-product" element={<AddNewProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
