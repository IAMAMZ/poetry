import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaBook,
  faTimes,
  faBook,
  FaRegWindowClose,
} from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import "./Header.css";
import Dictionary from "./Dictionary";
import AuthContext from "../context/AuthProvider";

export default function Header() {
  console.log("header component ran");
  const navRef = useRef();
  const dictref = useRef();
  const { auth } = useContext(AuthContext);
  console.log("This the auth object ...", auth);

  const [showdict, setShowdict] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const showDictionary = () => {
    setShowdict(!showdict);
    console.log("the state of show dict is", showdict);
  };
  return (
    <header className="outerWrapper">
      <div className="innerWrapper">
        <Dictionary
          changeShow={showDictionary}
          className="dictionary"
          show={showdict}
        />
        <button className="dict-link" onClick={showDictionary}>
          <FaBook />
        </button>
        <h1>The Poetry App</h1>
        <nav ref={navRef}>
          <NavLink onClick={showNavBar} className="nav-link" to={"/"}>
            Home
          </NavLink>
          <NavLink onClick={showNavBar} className="nav-link" to={"/about"}>
            About
          </NavLink>
          {auth.user ? (
            <>
              <NavLink
                onClick={showNavBar}
                className="nav-link"
                to={"/savedwords"}
              >
                Saved Words
              </NavLink>
              <NavLink
                onClick={showNavBar}
                className="nav-link"
                to={"/savedpoems"}
              >
                Saved Poems
              </NavLink>
              <NavLink onClick={showNavBar} className="nav-link" to={"/login"}>
                {auth.user}
              </NavLink>
              <NavLink onClick={showNavBar} className="nav-link" to={"/logout"}>
                Logout
              </NavLink>
            </>
          ) : (
            <>
              <NavLink onClick={showNavBar} className="nav-link" to={"/login"}>
                Login
              </NavLink>
              <NavLink onClick={showNavBar} className="nav-link" to={"/login"}>
                Sign Up
              </NavLink>
            </>
          )}

          <button onClick={showNavBar} className="nav-btn nav-close-btn">
            <FaRegWindowClose />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavBar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}
