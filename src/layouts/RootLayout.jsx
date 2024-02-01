import { NavLink, Outlet } from "react-router-dom";
import "../style/index.css";

function RootLayout() {
  return (
    <>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "active" : "";
        }}
        style={{ marginRight: "5px" }}
        to="/"
      >
        Home
      </NavLink>
      |
      <NavLink
        className={({ isActive }) => {
          return isActive ? "active" : "";
        }}
        style={{ marginRight: "5px", marginLeft: "5px" }}
        to="/blogs"
      >
        Blog
      </NavLink>
      |
      <NavLink
        className={({ isActive }) => {
          return isActive ? "active" : "";
        }}
        style={{ marginLeft: "5px" }}
        to="/about"
      >
        About
      </NavLink>
      <hr />
      <Outlet />
    </>
  );
}

export default RootLayout;
