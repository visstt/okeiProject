import React from "react";
import styles from "./HomeProjectInfo.module.css";
import bluePhoto from "../../../../public/bluePhoto.png";
import greenPhoto from "../../../../public/greenPhoto.png";
import pinkPhoto from "../../../../public/pinkPhoto.png";

export default function HomeProjectInfo() {
  return (
    <div className={styles.container}>
      <h1>Готовы воплотить свои идеи в жизнь?</h1>
      <div className={styles.wrapper}>
        <div className={styles.first}>
          <h2>01</h2>
          <p>Выберите направление для реализации вашего проекта</p>
        </div>
        <div className={styles.number}>
          <h2>02</h2>
          <p>Оставьте заявку с информацией о вашей идее</p>
        </div>
        <div className={styles.number}>
          <h2>03</h2>
          <p>Посетите ОКЭИ, для утверждения шаблонов вашего творения</p>
        </div>
        <div className={styles.number}>
          <h2>04</h2>
          <p>Получите крутой готовый проект, выполненный нашими студентами</p>
        </div>
      </div>
      <div className={styles.directions}>
        <div className={styles.mainBlock}>
          <div className={styles.block}>
            <h2 className={styles.blue}>Разработка веб-сайта</h2>
            <img src={bluePhoto} alt={styles.bluePhoto} />
          </div>
          <div className={styles.block}>
            <h2 className={styles.green}>Графический дизайн</h2>
            <img src={greenPhoto} alt={styles.greenPhoto} />
          </div>
          <div className={styles.block}>
            <h2 className={styles.pink}>Фото/Видео съёмка</h2>
            <img src={pinkPhoto} alt={styles.pinkPhoto} />
          </div>
        </div>
        <button className={styles.button}>Наши проекты</button>
      </div>
    </div>
  );
}
