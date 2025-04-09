import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
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
              className="header__email-button"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
