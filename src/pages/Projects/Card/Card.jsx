import React from "react";
import styles from "./Card.module.css";
import imgCard from "../../../../public/imgCard.png";

export default function Card() {
  return (
    <div className={styles.container}>
      <img src={imgCard} alt="imgCard" />
      <div className={styles.text}>
        <h1>ВЕБ САЙТ</h1>
        <p>
          Современный дизайн, плавная анимация, идеальный пользовательский опыт
        </p>
      </div>
      <button className={styles.button}>Подробнее</button>
    </div>
  );
}
