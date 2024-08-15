import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

export const Header = () => {
  const addActive = ({ isActive }) => (isActive ? s.active : s.link);
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.list}>
          <li>
            <NavLink
              className={(props) => {
                console.log(props);
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to="photos">
              Photos
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to="quize">
              Quize
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to="points">
              Points
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to="props">
              Props
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to="todos">
              Todos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};