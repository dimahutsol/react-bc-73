import { useState } from 'react';
import css from './Points.module.css';

const Points = () => {
  const [points, setPoints] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
  });

  const handleClick = (item, step) => {
    setPoints(prev => ({ ...prev, [item]: prev[item] + step }));
  };
  const total = Object.values(points).reduce((acc, value) => acc + value, 0);

  return (
    <div>
      <ul className={css.pointsList}>
        {Object.keys(points).map((item, index) => (
          <button key={item} onClick={() => handleClick(item, index + 1)}>
            {item}
          </button>
        ))}
      </ul>
      <ul className={css.pointsList}>
        {Object.entries(points).map(([key, value]) => (
          <li key={key}>
            <span>
              {key}: {value}
            </span>
          </li>
        ))}
        <li>Total:{total}</li>
      </ul>
    </div>
  );
};
export default Points;
