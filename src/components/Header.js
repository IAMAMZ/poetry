import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="outerWrapper">
      <div className="innerWrapper">
        <h1>The Poetry App</h1>
        <ul>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About </NavLink>
          <NavLink to={"/savedwords"}>Saved Words</NavLink>
        </ul>
      </div>
    </div>
  );
}
