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

  const handleClick = item => {
    setPoints(prev => ({ ...prev, [item]: prev[item] + 1 }));
  };
  return (
    <div>
      <ul className={css.pointsList}>
        {Object.keys(points).map(item => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
      </ul>
    </div>
  );
};
export default Points;
