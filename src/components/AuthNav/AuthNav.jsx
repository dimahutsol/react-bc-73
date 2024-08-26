import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

export const AuthNav = () => {
  const addActive = ({ isActive }) => (isActive ? s.active : s.link);

  return (
    <ul className={s.list}>
      <li>
        <NavLink className={addActive} to="login">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink className={addActive} to="register">
          Register
        </NavLink>
      </li>
    </ul>
  );
};
