import React from "react";
import "./menu_kitchen.scss";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <NavLink
        to="/kitchen/addFood"
        style={{ textDecoration: "none" }}
        className="addFood"
      >
        ADD FOOD
      </NavLink>

      {/* <NavLink
        to="/kitchen/addCount"
        style={{ textDecoration: "none" }}
        className="addCount"
      >
       ADD COUNT
      </NavLink> */}

      {/* <NavLink
        to="/kitchen/foodCountDetails"
        style={{ textDecoration: "none" }}
        className="foodCountDetails"
      >
        FOOD COUNT DETAILS
      </NavLink> */}
      <NavLink
        to="/kitchen/foodStockDetails"
        style={{ textDecoration: "none" }}
        className="foodStockDetails"
      >
        FOOD STOCK DETAILS
      </NavLink>
    </div>
  );
};

export default Menu;
