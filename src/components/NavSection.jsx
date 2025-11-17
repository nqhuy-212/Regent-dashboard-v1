// NavSection.jsx
import React from "react";
import "./navSection.css";
import NavItem from "./NavItem";

function NavSection({ id, icon, title, items }) {
  return (
    <li className="nav-item">
      <a
        // href="#"
        role="button"
        className="nav-link collapsed"
        data-bs-target={`#${id}`}
        data-bs-toggle="collapse"
      >
        <i className={icon}></i>
        <span>{title}</span>
        <i className="bi bi-chevron-down ms-auto"></i>
      </a>

      <ul
        id={id}
        className="nav-content collapse"
        data-bs-parent="#sidebar-nav"
      >
        {items.map((item, idx) => (
          <NavItem
            key={idx}
            title={item.title}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </ul>
    </li>
  );
}

export default NavSection;
