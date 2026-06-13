import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Link, NavLink } from "react-router";
function Navbar() {
  return (
    <div className="navbar">
      <h2>logo</h2>
      <ul>
        <NavLink to={"/"}>
          <li>home</li>
        </NavLink>

        <NavLink to={"/cart"}>
          <li>
            cart <CiShoppingCart />
          </li>
        </NavLink>
        <NavLink to={"/admin"}>
          <li>switch to admin vew</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
