import "./style/Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink
        to="/list"
        className="nav-tab"
        activeClassName="active-tab"
        id="list-tab"
      >
        List
      </NavLink>
      <NavLink
        to="/insights"
        className="nav-tab"
        activeClassName="active-tab"
        id="insights-tab"
      >
        Insights
      </NavLink>
      <NavLink
        to="/explore"
        className="nav-tab"
        activeClassName="active-tab"
        id="explore-tab"
      >
        Explore
      </NavLink>
      <NavLink
        to="/about"
        className="nav-tab"
        activeClassName="active-tab"
        id="about-tab"
      >
        About
      </NavLink>
      <NavLink
        exact
        to="/"
        className="nav-tab"
        activeClassName="active-tab"
        id="home-tab"
      >
        AlgoStore
      </NavLink>
    </div>
  );
};

export default Navbar;
