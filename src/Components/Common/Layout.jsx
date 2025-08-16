import React from "react";

const Layout = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`min-h-screen w-full flex flex-col bg-gray-50 text-gray-800 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Layout;
