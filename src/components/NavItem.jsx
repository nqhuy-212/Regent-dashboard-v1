import "./navItem.css";
import React from "react";
import { NavLink } from "react-router-dom";

function NavItem({ title, href, icon = "bi bi-star-fill" }) {
  return (
    <li>
      <NavLink
        to={href}
        className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}
      >
        {icon && <i className={icon}></i>}
        <span>{title}</span>
      </NavLink>
    </li>
  );
}

export default NavItem;
