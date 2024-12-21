import React, { useState } from "react";
import styles from "./HomeSlider.module.css";
import avatar from "../../../../public/avatar.png";
import photoSlider from "../../../../public/photoSlider.png";

export default function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      leftSide: (
        <>
          <img src={avatar} alt="avatar" />
          <h2>Это Никита Безгин</h2>
          <h3>Иллюстратор</h3>
          <p>
            Не только талантливый иллюстратор, но и невероятно эффективный
            работник. Он выполняет задачи быстро и качественно, всегда
            укладываясь в сроки. Его профессионализм и ответственность делают
            его ценным активом для любого проекта
          </p>
        </>
      ),
      rightSide: (
        <>
          <h1>А это проекты Никиты</h1>
          <img src={photoSlider} alt="photoSlider" />
        </>
      ),
    },
    {
      leftSide: (
        <>
          <img src={avatar} alt="avatar" />
          <h2>Это Мария Иванова</h2>
          <h3>Дизайнер</h3>
          <p>
            Талантливый дизайнер, который создает уникальные и вдохновляющие
            проекты. Ее творчество и внимание к деталям делают ее ценным
            участником команды.
          </p>
        </>
      ),
      rightSide: (
        <>
          <h1>Проекты Марии</h1>
          <img src={photoSlider} alt="photoSlider" />
        </>
      ),
    },
  ];

  const handleNextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }
  };

  const handlePrevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Наши студенты получают реальный опыт работы, обучаясь в колледже</h1>

      <div className={styles.sliderWrapper}>
        <div className={styles.arrowWrapper}>
          <button className={styles.arrow} onClick={handlePrevSlide}>
            ⮜
          </button>
          <button className={styles.arrow} onClick={handleNextSlide}>
            ⮞
          </button>
        </div>
        <div
          className={`${styles.wrapper} ${isAnimating ? styles.animating : ""}`}
        >
          <div
            className={styles.slide}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className={styles.slideContent}>
                <div className={styles.leftSide}>{slide.leftSide}</div>
                <div className={styles.rightSide}>{slide.rightSide}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
