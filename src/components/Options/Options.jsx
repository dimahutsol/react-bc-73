import css from "./Options.module.css";
import { Heading } from "components";

export const Options = ({ options, handleClick }) => {
  return (
    <>
      <Heading title="Ratings you can leave😉" top bottom />
      <ul className={css.pointsList}>
        {options.map((item, index) => (
          <button key={item} onClick={() => handleClick(item, index + 1)}>
            {item}
          </button>
        ))}
      </ul>
    </>
  );
};
