import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav>
        <Link className="logo__link" to="/">
          <div className="header__logo">
            <img
              src="https://media.istockphoto.com/vectors/icon-vector-id872882196?k=20&m=872882196&s=612x612&w=0&h=WWNILf2qklSmXFKIXOFaUJbLQTrGWNANZVs97Vanbbs="
              alt="logo"
              className="logo"
            />
            <p className="header__name">Gurudatt Puranik</p>
          </div>
        </Link>

        <div className="nav__links">
          <Link className="links" to="/">
            <i class="fa-solid fa-house"></i>
            Home
          </Link>
          <Link className="links" to="/projects">
            <i class="fa-solid fa-list-check"></i>
            Projects
          </Link>
          <Link className="links" to="/blogs">
            <i class="fa-brands fa-blogger"></i>
            Blogs
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
