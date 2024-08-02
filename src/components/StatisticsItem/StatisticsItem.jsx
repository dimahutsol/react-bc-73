import { IconContext } from "react-icons";
import s from "./StatisticsItem.module.css";
export const StatisticsItem = ({ title, total, icon }) => {
  return (
    <>
      <IconContext.Provider value={{ color: "blue", size: "30px" }}>
        {icon}
      </IconContext.Provider>
      <span className={s.counter}>{total}</span>
      <p className={s.text}>{title}</p>
    </>
  );
};
