import React from "react";
import styles from "./Projects.module.css";
import Card from "./Card/Card";

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperButton}>
        <button className={styles.blueButton}>Программирование</button>
        <button className={styles.pinkButton}>Креатив</button>
      </div>

      <div className={styles.mainBlock}>
        <div className={styles.highlight}>web</div>
      </div>
      <div className={styles.cardWrapper}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
