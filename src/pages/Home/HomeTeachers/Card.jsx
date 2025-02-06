import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./HomeTeachers.module.css";

export default function Card() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4200/api/teacher/all")
      .then((response) => {
        setTeachers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={styles.cards}>
      {teachers.map((teacher) => (
        <div key={teacher.teacherId} className={styles.card}>
          <div className={styles.toast}>
            <h4>Программирование</h4>
          </div>
          <div>
            <img
              className={styles.avatar}
              src={`http://localhost:4200/uploads/${teacher.photoPath}`}
              alt={teacher.fullName}
            />
          </div>

          <h2>{teacher.fullName}</h2>
          <h3>{teacher.description}</h3>
        </div>
      ))}
    </div>
  );
}
