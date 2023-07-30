import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaBook,
  faTimes,
  faBook,
  FaRegWindowClose,
} from "react-icons/fa";
import { useRef, useState } from "react";
import "./Header.css";
import Dictionary from "./Dictionary";

export default function Header() {
  const navRef = useRef();
  const dictref = useRef();

  const [showdict, setShowdict] = useState(false);

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
            About{" "}
          </NavLink>
          <NavLink onClick={showNavBar} className="nav-link" to={"/savedwords"}>
            Saved Words
          </NavLink>
          <NavLink onClick={showNavBar} className="nav-link" to={"/login"}>
            Login
          </NavLink>
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
