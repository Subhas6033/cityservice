import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const footerItems = [
    { name: "Support", navUrl: "/support" },
    { name: "About Us", navUrl: "/about" },
    { name: "Contact Us", navUrl: "/contact" },
    { name: "Careers", navUrl: "/careers" },
    { name: "Payments", navUrl: "/payment" },
  ];

  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo or Brand Name */}
        <div className="text-lg font-semibold text-white mb-4 md:mb-0">
          CityService
        </div>

        {/* Footer Links */}
        <ul className="flex flex-wrap gap-6 text-sm">
          {footerItems.map((footer) => (
            <li key={footer.name}>
              <button
                onClick={() => navigate(footer.navUrl)}
                className="hover:text-white transition-colors duration-200"
              >
                {footer.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} CityService. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
