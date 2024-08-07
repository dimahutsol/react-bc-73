import css from "./Result.module.css";

export const Result = ({ restartGame, correct, total }) => {
  return (
    <div className={css.card}>
      <img
        className={css.img}
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="Final"
      />
      <h3>
        Ви відповіли правильно на {correct} питання з {total}!
      </h3>
      <button onClick={restartGame} className={css.button}>
        Спробувати знову
      </button>
    </div>
  );
};
