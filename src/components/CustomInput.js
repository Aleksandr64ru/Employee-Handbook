import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Custominput.css";

const CustomInput = ({ placeholder, value, onChange }) => {
  const [inputPlaceholder, setInputPlaceholder] = useState(placeholder);

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

CustomInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

CustomInput.defaultProps = {
  placeholder: "Фамилия и Имя",
};

export default CustomInput;

