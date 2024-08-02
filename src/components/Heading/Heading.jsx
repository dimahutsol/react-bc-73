import clsx from "clsx";
import s from "./Heading.module.css";

export const Heading = ({ title, top, bottom }) => {
  return (
    <h2 className={clsx(s.title, { [s.bottom]: bottom, [s.top]: top })}>
      {title}
    </h2>
  );
};
