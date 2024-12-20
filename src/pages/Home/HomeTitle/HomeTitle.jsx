import React, { useEffect, useState } from "react";
import styles from "./HomeTitle.module.css";
import logoOksei from "../../../../public/logoOksei.png";
import message from "../../../../public/message.png";

export default function HomeTitle() {
  const [text, setText] = useState("");
  const fullText = "Зддесь студенты получают кейсы от компаний";
  const cursorVisible = true;

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    const typingInterval = 100; // Интервал для печати
    const deletingInterval = 100; // Интервал для стирания
    const delayBeforeDeleting = 2000; // Задержка перед началом стирания

    const interval = setInterval(
      () => {
        if (!isDeleting) {
          if (index < fullText.length) {
            setText((prev) => prev + fullText.charAt(index));
            index++;
          } else {
            // Задержка перед началом стирания
            setTimeout(() => {
              isDeleting = true; // Начинаем стирать текст
            }, delayBeforeDeleting);
          }
        } else {
          if (index > 0) {
            setText((prev) => prev.slice(0, -1));
            index--;
          } else {
            isDeleting = false; // Начинаем снова печатать текст
          }
        }
      },
      isDeleting ? deletingInterval : typingInterval
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.block1}>
        <h2>Оренбургский колледж экономики и информатики</h2>
        <h1 className={styles.typed}>
          {text}
          {cursorVisible && <span className={styles.cursor}>|</span>}
        </h1>
        <h3>
          В ОКЭИ студенты погружаются в мир реальных проектов, приобретая
          бесценный опыт и создавая собственные шедевры
        </h3>
      </div>
      <div className={styles.vertical}>
        <div className={styles.block2}>
          <img src={logoOksei} alt="logoOksei" />
        </div>
        <div className={styles.block3}>
          <img src={message} alt="message" />
        </div>
      </div>
    </div>
  );
}
