import React, { useEffect, useState } from "react";
import styles from "./HomeDescription.module.css";
import girl from "../../../../public/girl.png";
import { Link } from "react-router-dom";

const HomeDescription = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await fetch("http://localhost:4200/api/logo/all");
        const data = await response.json();
        setLogos(data);
      } catch (error) {
        console.error("Ошибка при загрузке логотипов:", error);
      }
    };

    fetchLogos();
  }, []);

  const images = logos.map((logo) => ({
    src: `http://localhost:4200/uploads/${logo.logoPath}`,
    alt: `logo-${logo.logoId}`,
  }));

  // Дублируем массив images
  const duplicatedImages = [
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ];

  const MarqueeImage = ({ image, delay }) => {
    return (
      <div
        style={{
          width: "200px",
          padding: "20px",
          display: "inline-block",
          animation: "marquee 120s linear infinite",
          animationDelay: `${delay * 0.1}s`,
        }}
      >
        <img src={image.src} alt={image.alt} className={styles.img} />
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={girl} alt="girl" />
        <h1>
          ОКЭИ - это мир креативных проектов. От дизайна до программирования —
          мы создаем все, что вам нужно
        </h1>
      </div>

      <h2>Наши партнеры</h2>

      <div className={styles.stroka}>
        <div className={styles.marquee}>
          <div className={styles.marqueeInner}>
            {duplicatedImages.map((image, index) => (
              <MarqueeImage key={index} image={image} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </div>

      <button className={styles.button}>
        <h3>Перейти к заявке</h3>
      </button>
    </div>
  );
};

export default HomeDescription;
