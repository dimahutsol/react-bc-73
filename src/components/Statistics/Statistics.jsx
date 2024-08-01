import { StatisticsItem } from "../StatisticsItem/StatisticsItem";

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map((stat) => (
          <li key={stat.id}>
            <StatisticsItem {...stat} />
          </li>
        ))}
      </ul>
    </>
  );
};
