import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [anim, setAnim] = useState(false);

  const handlerClick = () => {
    setAnim(!anim);
  };
  return (
    <div>
      <div onClick={handlerClick}>
        <span className={`menu-burger ${anim ? "anim-class" : ""}`}></span>
      </div>
      <nav className={anim ? "nav-active" : ""}>
        <ul>
          <li>
            <NavLink
              to="/qui-suis-je"
              className={(nav) => (nav.isActive ? "active-link" : "")}
            >
              Qui suis-je ?
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={(nav) => (nav.isActive ? "active-link" : "")}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              end
              className={(nav) => (nav.isActive ? "active-link" : "")}
            >
              Résumé
            </NavLink>
          </li>
          <li className="link-mobile">
            <NavLink
              to="/contact"
              className={(nav) => (nav.isActive ? "active-link" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
