import clsx from "clsx";
import css from "./Options.module.css";
import { Heading } from "components";

export const Options = ({ options, handleClick, total, handleResetClick }) => {
  return (
    <>
      <Heading title="Ratings you can leave😉" top bottom />
      <ul className={css.pointsList}>
        {options.map((item, index) => (
          <li key={item}>
            <button
              onClick={() => handleClick(item, index + 1)}
              className={clsx(css.btn, {
                [css[item]]: item,
              })}
            >
              {item}
            </button>
          </li>
        ))}
        {total > 0 && (
          <li>
            <button
              onClick={handleResetClick}
              className={clsx(css.btn, css.reset)}
            >
              Reset
            </button>
          </li>
        )}
      </ul>
    </>
  );
};
