import { FaRegThumbsUp } from "react-icons/fa";
import { MdPeople, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GiTreeDoor } from "react-icons/gi";

import { StatisticsItem } from "../StatisticsItem/StatisticsItem";
import s from "./Statistics.module.css";

const icons = [
  <FaRegThumbsUp key="FaRegThumbsUp" />,
  <MdPeople key="MdPeople" />,
  <MdOutlineProductionQuantityLimits key="MdOutlineProductionQuantityLimits" />,
  <GiTreeDoor key="GiTreeDoor" />,
];

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map((stat, index) => (
          <li className={s.item} key={stat.id}>
            <StatisticsItem {...stat} icon={icons[index]} />
          </li>
        ))}
      </ul>
    </>
  );
};
