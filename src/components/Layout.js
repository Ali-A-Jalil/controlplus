import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children, isSidebarOpen, toggleSidebar }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div
        className="flex-grow flex flex-col transition-all duration-300"
        style={{
          marginLeft: isSidebarOpen ? "16rem" : "4rem", // Adjust space dynamically
        }}
      >
        <Header />
        <main className="flex-grow bg-gray-100 p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
