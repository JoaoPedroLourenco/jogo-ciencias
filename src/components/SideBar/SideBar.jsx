import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <nav>
      <ul>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#9a9a9a62" : "",
          })}
        >
          <li>Texto</li>
        </NavLink>

        <NavLink
          to="/enigma1"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#9a9a9a62" : "",
          })}
        >
          <li>Enigma 1</li>
        </NavLink>

        <NavLink
          to="/enigma2"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#9a9a9a62" : "",
          })}
        >
          <li>Enigma 2</li>
        </NavLink>

        <NavLink
          to="/enigma3"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#9a9a9a62" : "",
          })}
        >
          <li>Enigma 3</li>
        </NavLink>

        <NavLink
          to="/enigma4"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#9a9a9a62" : "",
          })}
        >
          <li>Enigma 4</li>
        </NavLink>

        <NavLink
          to="/enigma5"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#9a9a9a62" : "",
          })}
        >
          <li>Enigma 5</li>
        </NavLink>

        <NavLink
          to="/enigma6"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#9a9a9a62" : "",
          })}
        >
          <li>Enigma 6</li>
        </NavLink>

        <NavLink
          to="/enigma7"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#9a9a9a62" : "",
          })}
        >
          <li>Enigma 7</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default SideBar;
