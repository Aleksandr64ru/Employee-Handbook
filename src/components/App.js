import React, { useState } from "react";
import Title from "./Title";
import Rules from "./Rules";
import CustomInput from "./CustomInput";
import "../styles/App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const helpText = "Имя и фамилия"; 

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Чтобы форма не перезагружалась при отправке
    if (inputValue.trim()) {
      alert(`Отправлено: ${inputValue}`);
    } else {
      alert("Пожалуйста, введите имя и фамилию.");
    }
  };

  return (
    <div className="content">
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
