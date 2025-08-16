import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navItems = [
    {
      name: "About us",
      navUrl: "/about",
    },
    {
      name: "Services",
      navUrl: "/service",
    },
    {
      name: "Login",
      navUrl: "/login",
    },
    {
      name: "Contact us",
      navUrl: "/contact",
    },
  ];

  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        {navItems.map((nav) => (
          <li key={nav.name}>
            <button onClick={() => navigate(nav.navUrl)}>{nav.name}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
