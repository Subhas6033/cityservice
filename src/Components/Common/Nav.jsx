import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navItems = [
    { name: "About Us", navUrl: "/about" },
    { name: "Services", navUrl: "/service" },
    { name: "Login", navUrl: "/login" },
    { name: "Contact Us", navUrl: "/contact" },
  ];

  const navigate = useNavigate();

  return (
    <nav className="bg-gray-900 text-gray-200 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <div
          className="text-xl font-bold text-white cursor-pointer"
          onClick={() => navigate("/")}
        >
          CityService
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {navItems.map((nav) => (
            <li key={nav.name}>
              <button
                onClick={() => navigate(nav.navUrl)}
                className="hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {nav.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
