import { Link } from 'react-router-dom';
import s from './GoBackBtn.module.css';

export const GoBackBtn = ({ to }) => {
  return (
    <Link className={s.link} to={to}>
      Go Back
    </Link>
  );
};
