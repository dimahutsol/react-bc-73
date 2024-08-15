import { useState } from "react";
import { Game, Result } from "components";
import css from "./Quize.module.css";

const questions = [
  {
    title: "React - це ... ?",
    variants: ["бібліотека", "фреймворк", "додаток"],
    correct: 0,
  },
  {
    title: "Компонент - це... ",
    variants: [
      "додаток",
      "частина додатка або сторінки",
      "те, що я не знаю, що таке",
    ],
    correct: 1,
  },
  {
    title: "Що таке JSX?",
    variants: [
      "Це простий HTML",
      "Це функція",
      "Це той же HTML, але з можливістю виконувати JS-код",
    ],
    correct: 2,
  },
  {
    title: "Що таке useState?",
    variants: [
      "Хук який дозволяє нам відстежувати стан у компоненті функції",
      "Це глобальний стейт",
      "Якщо ви заплутаєтесь, шукайте такий жовтий блок...",
    ],
    correct: 0,
  },
];

const Quize = () => {
  const [correct, setCorrect] = useState(0);
  const [step, setStep] = useState(0);
  const [click, setClick] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClickVariant = (index) => {
    if (questions[step].correct === index) {
      setCorrect(correct + 1);
    }

    setClick(true);
    setSelectedIndex(index);

    setTimeout(() => {
      setStep(step + 1);
      setClick(false);
      setSelectedIndex(null);
    }, 2000);
  };

  const restartGame = () => {
    setCorrect(0);
    setStep(0);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.box}>
        {questions.length !== step ? (
          <Game
            selectedIndex={selectedIndex}
            click={click}
            percentage={Math.round((step / questions.length) * 100)}
            question={questions[step]}
            handleClickVariant={handleClickVariant}
          />
        ) : (
          <Result
            correct={correct}
            total={questions.length}
            restartGame={restartGame}
          />
        )}
      </div>
    </div>
  );
};

export default Quize;
