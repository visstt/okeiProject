import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./HomeProjectInfo.module.css";
import bluePhoto from "../../../../public/bluePhoto.png";
import greenPhoto from "../../../../public/greenPhoto.png";
import pinkPhoto from "../../../../public/pinkPhoto.png";
import { Link } from "react-router-dom";

export default function HomeProjectInfo() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [stacks, setStacks] = useState([]);

  // Загрузка данных стека технологий с API
  useEffect(() => {
    const fetchStacks = async () => {
      try {
        const response = await axios.get("http://localhost:4200/api/stack/all");
        setStacks(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке стека технологий:", error);
      }
    };

    fetchStacks();
  }, []);

  // Обработчики для анимации переворота карточки
  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    setFlippedIndex(index);
  };

  const handleMouseLeave = () => {
    setFlippedIndex(null);
  };

  // Массив проектов с данными из API
  const projects = [
    {
      title: "Разработка веб-сайта",
      image: bluePhoto,
      techStack:
        stacks.find((stack) => stack.areaName === "Разработка веб-сайта")
          ?.stack || "",
    },
    {
      title: "Графический дизайн",
      image: greenPhoto,
      techStack:
        stacks.find((stack) => stack.areaName === "Графический дизайн")
          ?.stack || "",
    },
    {
      title: "Фото/Видео съёмка",
      image: pinkPhoto,
      techStack:
        stacks.find((stack) => stack.areaName === "Фото/Видео съёмка")?.stack ||
        "",
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Готовы воплотить свои идеи в жизнь?</h1>
      <div className={styles.wrapper}>
        <div className={styles.first}>
          <h2>01</h2>
          <p>Выберите направление вашего проекта</p>
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
          <p>Получите крутой проект, выполненный студентами</p>
        </div>
      </div>
      <div className={styles.directions}>
        <div className={styles.mainBlock}>
          {projects.map((project, index) => (
            <div
              className={styles.block}
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
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
                  <p className={styles.stackTitle}>Стек технологий:</p>
                  <div className={styles.stackList}>
                    {project.techStack.split(";").map((tech, idx) => (
                      <div key={idx} className={styles.stackItem}>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className={styles.btnWrapper}>
        <Link to="/projects" className={styles.button}>
          <p>Наши проекты</p>
        </Link>
      </div> */}
    </div>
  );
}
