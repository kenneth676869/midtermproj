import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="m-2 float-center">
          <h3 className="logo text-white px-5 m-2 float-center">DC 302: Reactjs Midterm Project</h3>
        </div>
       
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Navbar;
