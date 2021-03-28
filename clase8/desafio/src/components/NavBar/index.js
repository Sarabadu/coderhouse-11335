import React from "react";
import CartWidget from "../CartWidget";

import {Link, NavLink} from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to='/' className="navbar-brand" >
        Juan Commerce
      </Link>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink exact to='/' activeClassName="active pepe" className="nav-item nav-link" >
            Home
          </NavLink>
          <NavLink to={`/category/cate1`} activeClassName="active" className="nav-item nav-link" >
            Categoria 1
          </NavLink>
          <NavLink to={`/category/cate2`} activeClassName="active" className="nav-item nav-link" >
            Categoria 2
          </NavLink>
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
