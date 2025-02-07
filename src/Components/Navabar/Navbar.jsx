import React from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faUserPlus,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="title nav-title">
          NoobFood <FontAwesomeIcon icon={faUtensils} />
        </div>
        <div className="nav-link">
          <ul>
            <li className="nav-li">
              <a href="">Home</a>
            </li>
            <li className="nav-li">
              <a href="">Search</a>
            </li>
            <li>
              <a href="" className="signin btn">
                <FontAwesomeIcon icon={faSignInAlt} /> Sign In
              </a>
            </li>
            <li>
              <a href="" className="signup btn">
                <FontAwesomeIcon icon={faUserPlus} /> Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
