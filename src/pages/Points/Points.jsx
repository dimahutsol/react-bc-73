import { Options, Feedback, Heading } from 'components';
import { useLocalStorage } from 'hooks/useLocalStorage';

const initialState = {
  one: 0,
  two: 0,
  three: 0,
  four: 0,
  five: 0,
};

const Points = () => {
  const [points, setPoints] = useLocalStorage('points', initialState);

  const handleClick = (item, step) => {
    setPoints(prev => ({ ...prev, [item]: prev[item] + step }));
  };
  const total = Object.values(points).reduce((acc, value) => acc + value, 0);

  const handleResetClick = () => {
    setPoints(initialState);
  };

  return (
    <div>
      <Options
        options={Object.keys(points)}
        handleClick={handleClick}
        total={total}
        handleResetClick={handleResetClick}
      />
      {total > 0 ? (
        <Feedback feedback={[...Object.entries(points), ['total', total]]} />
      ) : (
        <Heading title="Leave a review" top />
      )}
    </div>
  );
};
export default Points;
