import React from "react";
import {NavLink} from "react-router-dom";
import "./sidebar.css";

export const SideBar = () => {
  return (
    <div className="App-sidebar">
      <nav className="App-sidebar-nav">
        <NavLink className = 'App-sidebar-link' exact to="/"  activeClassName='link-active'>Product list</NavLink>
        <NavLink className = 'App-sidebar-link' to="/cart" activeClassName='link-active'>Cart</NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
