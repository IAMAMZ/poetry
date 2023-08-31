import { NavLink, useNavigate, Link } from "react-router-dom";
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
import useLogout from "../hooks/useLogout";

export default function Header() {
  const logout = useLogout();
  const Navigate = useNavigate();
  const signOut = async () => {
    await logout();
    Navigate("/");
  };
  const navRef = useRef();
  const dictref = useRef();
  const { auth } = useContext(AuthContext);
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
              <Link
                onClick={() => {
                  showNavBar();
                  signOut();
                }}
                className="nav-link"
              >
                Sign Out
              </Link>
            </>
          ) : (
            <>
              <NavLink onClick={showNavBar} className="nav-link" to={"/signin"}>
                Sign In
              </NavLink>
              <NavLink
                onClick={showNavBar}
                className="nav-link"
                to={"/register"}
              >
                Register
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
