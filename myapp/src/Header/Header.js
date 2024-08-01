import React from "react";
import { NavLink } from "react-router-dom";
import headerStyles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={headerStyles.topbar}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ul className="mb-0 py-2">
                <li>
                  <NavLink to="tel:9013307674">+ 9013307674</NavLink>
                </li>
                <li>
                  <NavLink to="mailto:jinnalavanya100@gmail.com">
                    jinnalavanya100@gmail.com
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <NavLink>
                <button>Book service</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/addstudent">
                  Add Student
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/deletestudent">
                  Delete Student
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
