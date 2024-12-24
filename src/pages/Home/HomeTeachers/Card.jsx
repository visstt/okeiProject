import React from "react";
import styles from "./HomeTeachers.module.css";
import photoAvatar from "../../../../public/photoAvatar.png";

export default function Card() {
  return (
    <div className={styles.card}>
      <img src={photoAvatar} alt="photoAvatar" />
      <h2>Лукьяненко Ольга Владимировна</h2>
      <h3>Развивает студентов в создании веб сайтов</h3>
    </div>
  );
}
