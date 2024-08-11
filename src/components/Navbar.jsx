import React, { useState } from "react";
import logo from '../assets/news-logo.png'

const Navbar = ({ setCategory }) => {
  const [activeCategory, setActiveCategory] = useState("");

  const handleCategoryClick = (category) => {
    setCategory(category);
    setActiveCategory(category);
  };

  const handleNavbarClick = () => {
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <div
          className="navbar-brand"
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            handleNavbarClick();
          }}
        >
          <img style={{width:"100px"}} src={logo} alt="" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {[
              "technology",
              "business",
              "health",
              "sports",
              "entertainment",
            ].map((category) => (
              <li className="nav-item" key={category}>
                <div
                  className={`nav-link ${
                    activeCategory === category ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                  style={{ cursor: "pointer" }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
