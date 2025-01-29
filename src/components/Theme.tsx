import React, { useState, useEffect } from "react";
import "../styles/Theme.css";

const Theme: React.FC = () => {
  // Состояние для текущей темы
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false); // типизация как булево значение

  // Эффект для загрузки темы из localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkTheme(true);
    }
  }, []); // Пустой массив зависимостей, чтобы эффект сработал только при монтировании компонента
  
  // Эффект для сохранения выбранной темы в localStorage
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkTheme]); // Этот эффект срабатывает каждый раз при изменении состояния isDarkTheme

  return (
    <div className="theme-container">
      <h3 className="theme-title">
        Тема переключена на: {isDarkTheme ? "Тёмную" : "Светлую"}
      </h3>
      <button
        className="theme-button"
        onClick={() => setIsDarkTheme(!isDarkTheme)} // Типизация не требуется, так как это стандартный onClick
      >
        Переключить тему
      </button>
    </div>
  );
};

export default Theme;
