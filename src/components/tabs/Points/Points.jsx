import { useState } from "react";

import { Options, Feedback, Heading } from "components";

const Points = () => {
  const [points, setPoints] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
  });

  const handleClick = (item, step) => {
    setPoints((prev) => ({ ...prev, [item]: prev[item] + step }));
  };
  const total = Object.values(points).reduce((acc, value) => acc + value, 0);

  return (
    <div>
      <Options options={Object.keys(points)} handleClick={handleClick} />
      {total > 0 ? (
        <Feedback feedback={[...Object.entries(points), ["total", total]]} />
      ) : (
        <Heading title="Leave a review" top />
      )}
    </div>
  );
};
export default Points;
