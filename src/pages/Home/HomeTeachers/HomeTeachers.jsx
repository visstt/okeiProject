import React from "react";
import styles from "./HomeTeachers.module.css";
import Card from "./Card.jsx";
import { motion } from "framer-motion";

export default function HomeTeachers() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Команда руководителей проектной деятельности</h1>
      <motion.div
        className={styles.cards}
        initial={{ opacity: 0, x: 500 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1,
          type: "spring",
          ease: "easeInOut",
        }}
      >
        <Card />
      </motion.div>
    </motion.div>
  );
}
