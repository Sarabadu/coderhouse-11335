import React from "react";
import CartWidget from "./CartWidget";

export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Juan Commerce
      </a>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">
            Home
          </a>
          <a class="nav-item nav-link" href="#">
            Courses
          </a>
          <a class="nav-item nav-link" href="#">
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
