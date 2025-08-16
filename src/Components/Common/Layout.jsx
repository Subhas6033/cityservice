import React from "react";

const Layout = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`min-h-screen flex flex-col bg-gray-50 text-gray-800 ${className}`}
      {...props}
    >
      {/* Main Content Area */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;
