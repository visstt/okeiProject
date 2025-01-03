import React, { useState } from "react";
import styles from "./HomeProjectInfo.module.css";
import bluePhoto from "../../../../public/bluePhoto.png";
import greenPhoto from "../../../../public/greenPhoto.png";
import pinkPhoto from "../../../../public/pinkPhoto.png";
import { Link } from "react-router-dom";

export default function HomeProjectInfo() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const projects = [
    {
      title: "Разработка веб-сайта",
      image: bluePhoto,
      techStack: "HTML, CSS, JavaScript, React",
    },
    {
      title: "Графический дизайн",
      image: greenPhoto,
      techStack: "Photoshop, Illustrator",
    },
    {
      title: "Фото/Видео съёмка",
      image: pinkPhoto,
      techStack: "Canon, Adobe Premiere",
    },
  ];

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
          {projects.map((project, index) => (
            <div
              className={styles.block}
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <div
                className={`${styles.card} ${
                  flippedIndex === index ? styles.flipped : ""
                }`}
              >
                <div className={styles.front}>
                  <h2 className={styles.title}>{project.title}</h2>
                  <img src={project.image} alt={project.title} />
                </div>
                <div className={styles.back}>
                  <p>Стек технологий: {project.techStack}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link to="/projects">
        <button className={styles.button}>Наши проекты</button>
      </Link>
    </div>
  );
}
