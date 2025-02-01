import React, { useEffect, useState } from "react";
import styles from "./HomeTitle.module.css";
import logoOksei from "../../../../public/logoOkei.png";
import message from "../../../../public/message.png";
import messageVideo from "../../../../public/messageGif.mp4";
import { motion } from "framer-motion";

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
      <motion.div
        className={styles.block1}
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{
          duration: 1,
          type: "tween",
          opacity: { ease: "easeInOut" },
        }}
      >
        <h2>Оренбургский колледж экономики и информатики</h2>
        <h1 className={styles.typed}>
          {text}
          {cursorVisible && <span className={styles.cursor}>|</span>}
        </h1>
        <h3>
          В ОКЭИ студенты погружаются в мир реальных проектов, приобретая
          бесценный опыт и создавая собственные шедевры
        </h3>
      </motion.div>
      <div className={styles.vertical}>
        <motion.div
          className={styles.block2}
          initial={{ x: 2000 }}
          animate={{ x: 0 }}
          transition={{
            delay: 0.1,
            duration: 1,
            type: "spring",
            opacity: { ease: "easeInOut" },
          }}
        >
          <img src={logoOksei} alt="logoOksei" />
        </motion.div>
        <motion.div
          className={styles.block3}
          initial={{ x: 2000 }}
          animate={{ x: 0 }}
          transition={{
            delay: 0.2,
            duration: 1,
            type: "spring",
            opacity: { ease: "easeInOut" },
          }}
        >
          <video src={messageVideo} alt="messageVideo" autoPlay loop muted />
        </motion.div>
      </div>
    </div>
  );
}
