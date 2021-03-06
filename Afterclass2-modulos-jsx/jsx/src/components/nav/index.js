import React, { Fragment } from "react";
import "./nav.css";

export const NavBar = () => {
  return (
    <Fragment>
      <ul className="pepe">
        <li>
          <a href="pepe">Gaseosas</a>
        </li>
        <li>
          <a href="pepe">Heladeras</a>
        </li>
        <li>
          <a href="">Carnes</a>
        </li>
      </ul>
    </Fragment>
  );
};

export default NavBar;
