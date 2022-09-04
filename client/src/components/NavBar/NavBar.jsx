import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import FilterCategories from "../FilterCategories/FilterCategories";
import { useTranslation } from "react-i18next";
import logo from "../../media/logonavbar.png";
import "./LoggedNavBar/responsiveNavBar.scss";
export default function NavBar() {
  const { t } = useTranslation();

  return (
    <div className="navbar-space">
      <nav
        className="navbar navbar-expand-lg navbar-light  fixed-top"
        style={{ backgroundColor: "darkorange" }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="" height="80" />
          </Link>

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
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  justify-content-center ">
              <li className="nav-item white-text-nav">
                <Link to="/">{"HOME"}</Link>
              </li>
              <li className="nav-item dropdown  white-text-nav">
                <Link
                  to=""
                  className="dropdown-toggle"
                  id="dropdownMenuClickableInside"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  {"categorias"}
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <FilterCategories />
                </ul>
              </li>
              <li className="nav-item white-text-nav ">
                <Link to="/cart">{"carrito"}</Link>
              </li>
            </ul>
          </div>
          <SearchBar />
        </div>
      </nav>
    </div>
  );
}
