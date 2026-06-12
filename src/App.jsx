import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import AddNewProduct from "./pages/AddNewProduct";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
    <ToastContainer/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product"  element={<AddNewProduct/>}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
