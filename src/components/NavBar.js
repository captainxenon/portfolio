import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

import Switch from "@mui/material/Switch";

const NavBar = () => {
  return (
    <div className="container">
      <h1>DK</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/home"
              className="link"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#545e6f",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="link"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#545e6f",
              })}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className="link"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#545e6f",
              })}
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* <Switch defaultChecked color="secondary" /> */}
    </div>
  );
};

export default NavBar;
