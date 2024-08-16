import { Link, useLocation } from 'react-router-dom';
import css from './CountriesList.module.css';

export const CountriesList = ({ countries }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {countries.map(country => {
        return (
          <li key={country.name.common} className={css.item}>
            <Link to={`/countries/${country.name.common}`} state={location}>
              <img src={country.flags.png} alt={country.name.common} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
