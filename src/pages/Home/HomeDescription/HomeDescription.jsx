import React from "react";
import styles from "./HomeDescription.module.css";
import odnokl from "../../../../public/odnokl.png";

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
            <img src={odnokl} alt="odnokl" className={styles.img} />
            <img src={odnokl} alt="odnokl" className={styles.img} />
            <img src={odnokl} alt="odnokl" className={styles.img} />
            <img src={odnokl} alt="odnokl" className={styles.img} />
            <img src={odnokl} alt="odnokl" className={styles.img} />
            {/* Повторяем изображения для бесконечного эффекта */}
            <img src={odnokl} alt="odnokl" className={styles.img} />
            <img src={odnokl} alt="odnokl" className={styles.img} />
            <img src={odnokl} alt="odnokl" className={styles.img} />
            <img src={odnokl} alt="odnokl" className={styles.img} />
            <img src={odnokl} alt="odnokl" className={styles.img} />
          </div>
        </div>
      </div>

      <button className={styles.button}>Шаг на встречу успеху</button>
    </div>
  );
}
