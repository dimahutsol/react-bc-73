import { Game } from "components";
import css from "./Quize.module.css";
import { useState } from "react";

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

  const handleClickVariant = (index) => {
    if (questions[step].correct === index) {
      setCorrect(correct + 1);
    }
    setStep(step + 1);
  };

  console.log(correct);

  return (
    <div className={css.wrapper}>
      <div className={css.box}>
        <Game
          question={questions[step]}
          handleClickVariant={handleClickVariant}
        />
      </div>
    </div>
  );
};

export default Quize;
