import { Link } from "react-router-dom";
import css from "./CountriesList.module.css";

export const CountriesList = ({ countries }) => {
  return (
    <ul className={css.list}>
      {countries.map((country) => {
        return (
          <li key={country.name.common} className={css.item}>
            <Link to={`/countries/${country.name.common}`}>
              <img src={country.flags.png} alt={country.name.common} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
