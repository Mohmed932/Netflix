import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [scroll, setscroll] = useState(false);
  const white = { background: "white" };
  const transparent = { background: "transparent" };
  window.onscroll = () => {
    window.scrollY > 50 ? setscroll(true) : setscroll(false);
  };
  return (
    <div className="Navbar" style={scroll ? white : transparent}>
      <h1>NETFLIX</h1>
      <div className="Navbar-right">
        <Link to="/">
          <button className="btn">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
