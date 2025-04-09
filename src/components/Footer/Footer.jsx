import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="footer__title">
        <Link to="/">Gomes Da Silva Alexandre</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">À propos</Link>
          </li>
          <li>
            <a
              href="mailto:alexgds92@gmail.com"
              className="footer__email-button"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
