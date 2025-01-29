import React, { useState } from "react";
import "../styles/Custominput.css";

// Типизация пропсов для компонента CustomInput
interface CustomInputProps {
  placeholder?: string; // placeholder — строка, может быть необязательным
  value: string; // value — строка (обязательное поле)
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // onChange — функция для обработки изменения значения input
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder = "Фамилия и Имя", value, onChange }) => {
  const [inputPlaceholder, setInputPlaceholder] = useState<string>(placeholder);

  const handleFocus = () => {
    setInputPlaceholder("Введити Фамилию и имя...");
  };

  const handleBlur = () => {
    setInputPlaceholder(placeholder);
  };

  return (
    <input
      className="custom-input"
      placeholder={inputPlaceholder}
      value={value}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default CustomInput;
