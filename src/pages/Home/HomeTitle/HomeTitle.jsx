import React, { useEffect, useState } from "react";
import styles from "./HomeTitle.module.css";
import logoOksei from "../../../../public/logoOkei.png";
import message from "../../../../public/message.png";
import messageVideo from "../../../../public/messageVideo.mp4";

export default function HomeTitle() {
  const [text, setText] = useState("");
  const fullText = "Зддесь студенты получают кейсы от компаний";
  const cursorVisible = true;

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    const typingInterval = 100;
    const deletingInterval = 100;
    const delayBeforeDeleting = 2000;

    const interval = setInterval(
      () => {
        if (!isDeleting) {
          if (index < fullText.length) {
            setText((prev) => prev + fullText.charAt(index));
            index++;
          } else {
            setTimeout(() => {
              isDeleting = true;
            }, delayBeforeDeleting);
          }
        } else {
          if (index > 0) {
            setText((prev) => prev.slice(0, -1));
            index--;
          } else {
            isDeleting = false;
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
          <video src={messageVideo} alt="messageVideo" autoPlay loop muted />
        </div>
      </div>
    </div>
  );
}
