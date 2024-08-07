import css from "./Game.module.css";

export const Game = ({
  question,
  handleClickVariant,
  percentage,
  click,
  selectedIndex,
}) => {
  return (
    <>
      <div className={css.progress}>
        <div style={{ width: `${percentage}%` }}></div>
      </div>
      <h2 className={css.title}>{question.title}</h2>
      <ul>
        {question.variants.map((item, index) => (
          <li
            className={[
              css["item-question"],
              click && index === question.correct ? css.correct : "",
              click &&
              index === selectedIndex &&
              selectedIndex !== question.correct
                ? css.wrong
                : "",
            ].join(" ")}
            key={item}
            onClick={() => handleClickVariant(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
