import React, { useState } from "react";
import Title from "./Title";
import Rules from "./Rules";
import CustomInput from "./CustomInput";
import Theme from "./Theme";
import "../styles/App.css";

// Типизация компонента App
const App = () => {
  const [inputValue, setInputValue] = useState<string>(""); // Указываем, что inputValue — это строка
  const helpText: string = "Имя и фамилия"; // helpText — строка

  // Типизация события для изменения значения в input
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  // Типизация события для отправки формы
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault(); // Чтобы форма не перезагружалась при отправке
    if (inputValue.trim()) {
      alert(`Отправлено: ${inputValue}`);
    } else {
      alert("Пожалуйста, введите имя и фамилию.");
    }
  };

  return (
    <div className="content">
      <Theme />
      <Title />
      <form onSubmit={handleSubmit} className="input-container">
        <CustomInput
          placeholder={helpText}
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Отправить
        </button>
      </form>
      <Rules />
    </div>
  );
};

export default App;
