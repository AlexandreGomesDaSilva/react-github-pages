import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
          <li>
            <Link to="https://github.com/AlexandreGomesDaSilva" target="_blank">
              <FaGithub className="header__github-icon" />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/alexandre-gomes-da-silva-1b5592203/"
              target="_blank"
            >
              <FaLinkedin className="header__linkedin-icon" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
