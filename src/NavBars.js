import { Link } from "react-router-dom";
import React from "react";

function NavBars() {
  const NavLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
    { name: "Products", path: "/Products" },
    { name: "Checkout", path: "/Checkout" },
    { name: "Login", path: "/Login" },
  ];

  return (
    <nav className=" nav-section navbar navbar-expand-md navbar-light">
      <div className="container justify-content-end">

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="nav-sec navbar-nav ms-auto">
            {NavLinks.map((LinkItem) => (
              <li key={LinkItem.path} className="nav-item">
                <Link className="nav-link" to={LinkItem.path}>
                  {LinkItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default NavBars;
