import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <ul class="list-items">
          <li>
            <Link className="list-item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="list-item" to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link className="list-item" to="/services">
              Services
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
