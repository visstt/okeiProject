import React from "react";
import styles from "./HomeTeachers.module.css";
import Card from "./Card.jsx";

export default function HomeTeachers() {
  return (
    <div className={styles.container}>
      <h1>Команда руководителей проектной деятельности</h1>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
