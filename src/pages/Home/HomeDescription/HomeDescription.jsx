import React from "react";
import styles from "./HomeDescription.module.css";
import logoOkei from "../../../../public/logoOkei.png";

// Массив с объектами, содержащими информацию о картинках
const images = [
  { src: logoOkei, alt: "logoOkei" },
  { src: logoOkei, alt: "logoOkei" },
  { src: logoOkei, alt: "logoOkei" },
  { src: logoOkei, alt: "logoOkei" },
  { src: logoOkei, alt: "logoOkei" },
  { src: logoOkei, alt: "logoOkei" },
  { src: logoOkei, alt: "logoOkei" },
  { src: logoOkei, alt: "logoOkei" },
  { src: logoOkei, alt: "logoOkei" },
  { src: logoOkei, alt: "logoOkei" },
  { src: logoOkei, alt: "logoOkei" },
  { src: logoOkei, alt: "logoOkei" },
  { src: logoOkei, alt: "logoOkei" },

  // Добавьте другие картинки здесь
];

const MarqueeImage = ({ image, delay }) => {
  return (
    <div
      style={{
        width: "200px",
        padding: "20px",
        display: "inline-block",
        animation: "marquee 10s linear infinite",
        animationDelay: `${delay}s`,
      }}
    >
      <img src={image.src} alt={image.alt} className={styles.img} />
    </div>
  );
};

export default function HomeDescription() {
  return (
    <div className={styles.container}>
      <h1>
        ОКЭИ - это мир креативных проектов. От дизайна до программирования — мы
        создаем все, что вам нужно
      </h1>
      <h2>Наши партнеры</h2>

      <div className={styles.stroka}>
        <div className={styles.marquee}>
          <div className={styles.marqueeInner}>
            {images.map((image, index) => (
              <MarqueeImage key={index} image={image} delay={index * 2} />
            ))}
            {/* Дублируем картинки в конце строки */}
            {images.map((image, index) => (
              <MarqueeImage
                key={index + images.length}
                image={image}
                delay={index * 2}
              />
            ))}
          </div>
        </div>
      </div>

      <button className={styles.button}>Шаг на встречу успеху</button>
    </div>
  );
}
