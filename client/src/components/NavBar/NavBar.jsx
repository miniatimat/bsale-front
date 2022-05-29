import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../context/store";
import SearchBar from "../SearchBar/SearchBar";
import "./navBar.css";
import logo from "../../media/header_logo.png";
import { checkSession } from "../../redux/actions/actions";

import LoggedNavBar from "./LoggedNavBar/LoggedNavBar.jsx";
import GuestNavBar from "./GuestNavBar/GuestNavBar";
export default function NavBar() {
  const [state, dispatch] = useStore();

  useEffect(() => {
    checkSession(dispatch);
  }, [state.session]);
  return (
    <div>
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
        {state.session ? <LoggedNavBar /> : <GuestNavBar />}
      </header>
    </div>
  );
}
