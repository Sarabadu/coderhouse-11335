import React from "react";
import CartWidget from "../CartWidget";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#Home">
        Juan Commerce
      </a>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#Home">
            Home
          </a>
          <a className="nav-item nav-link" href="#Courses">
            Courses
          </a>
          <a className="nav-item nav-link" href="#Consulting">
            Consulting
          </a>
        </div>
      </div>
      <CartWidget />

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
};
