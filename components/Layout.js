import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <span className="w-full">
      <Navbar/>
      <span> {children} </span>
    </span>
  );
}

export default Layout;
