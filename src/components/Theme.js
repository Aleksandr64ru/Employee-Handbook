import React, { useState, useEffect } from "react";
import "../styles/Theme.css";
const Theme = () => {
  // Состояние для текущей темы
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Эффект для загрузки темы из localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkTheme(true);
    }
  }, []);
  
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkTheme]);

  return (
    <div className="theme-conteiner">
      <h3 className="theme-tittle">
        Тема переключена на: {isDarkTheme ? "Тёмную" : "Светлую"}
      </h3>
      <button
        className="theme-button"
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      >
        Переключить тему
      </button>
    </div>
  );
};

export default Theme;
