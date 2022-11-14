import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <div className="Footer">
      <h1>Questions? Contact us.</h1>
      <div className="Footer-Content">
        <div className="Content">
          <Link to="/">FAQ</Link>
          <Link to="/">Investor Relations</Link>
          <Link to="/">Privacy</Link>
          <Link to="/">Speed Test</Link>
        </div>
        <div className="Content">
          <Link to="/">Help Center</Link>
          <Link to="/">Jobs</Link>
          <Link to="/">Cookie Preferences</Link>
          <Link to="/">Legal Notices</Link>
        </div>
        <div className="Content">
          <Link to="/">Account</Link>
          <Link to="/">Ways to Watch</Link>
          <Link to="/">Corporate Information</Link>
          <Link to="/">Only on Netflix</Link>
        </div>
        <div className="Content">
          <Link to="/">Media Center</Link>
          <Link to="/">Terms of Use</Link>
          <Link to="/">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
