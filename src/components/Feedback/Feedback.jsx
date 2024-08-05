import css from "./Feedback.module.css";
import { Heading } from "components";

export const Feedback = ({ feedback }) => {
  return (
    <>
      <Heading title="The reviews you left" top bottom />
      <ul className={css.pointsList}>
        {feedback.map(([key, value]) => (
          <li key={key}>
            <span>
              {key}: {value}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
