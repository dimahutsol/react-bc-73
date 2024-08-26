import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./Navigation.module.css";
import { selectIsLogedIn } from "reduxStore/auth/selectors";

export const Navigation = () => {
  const addActive = ({ isActive }) => (isActive ? s.active : s.link);
  const isLogedIn = useSelector(selectIsLogedIn);

  return (
    <div>
      <ul className={s.list}>
        <li>
          <NavLink className={addActive} to="/">
            Home
          </NavLink>
        </li>
        {isLogedIn && (
          <>
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
            <li>
              <NavLink className={addActive} to="countries">
                Countries
              </NavLink>
            </li>
            <li>
              <NavLink className={addActive} to="searchCountries">
                Search Countries
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
