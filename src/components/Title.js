import React from "react";
import "../styles/Title.css";

const Title = ({
  text = "Правила работы с ТМЦ (Товарно-материальными ценностями)",
  bottomText = "Пожалуйста, внимательно ознакомьтесь с правилами. После ознакомления заполните форму ниже и нажмите кнопку \"Отправить\"."
}) => {
  return (
    <header className="title">
      <h1 className="header-title">{text}</h1>
      {bottomText && <p className="bottom-text">{bottomText}</p>}
    </header>
  );
};

export default Title;
