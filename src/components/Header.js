import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaBook,
  faTimes,
  faBook,
  FaRegWindowClose,
} from "react-icons/fa";
import { useRef } from "react";
import "./Header.css";
import Dictionary from "./Dictionary";

export default function Header() {
  const navRef = useRef();
  const dictref = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const showDictionary = () => {};
  return (
    <header className="outerWrapper">
      <div className="innerWrapper">
        <Dictionary className="dictionary" />
        <button className="dict-link" onClick={showDictionary}>
          <FaBook />
        </button>
        <h1>The Poetry App</h1>
        <nav ref={navRef}>
          <NavLink className="nav-link" to={"/"}>
            Home
          </NavLink>
          <NavLink className="nav-link" to={"/about"}>
            About{" "}
          </NavLink>
          <NavLink className="nav-link" to={"/savedwords"}>
            Saved Words
          </NavLink>
          <NavLink className="nav-link" to={"/login"}>
            Login
          </NavLink>
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
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
