import React, { useEffect } from "react";
import styles from "./HomeLayaot.module.css";
import HomeTitle from "./HomeTitle/HomeTitle";
import HomeDescription from "./HomeDescription/HomeDescription";
import HomeSlider from "./HomeSlider/HomeSlider";
import HomeTeachers from "./HomeTeachers/HomeTeachers";
import HomeProjectInfo from "./HomeProjectInfo/HomeProjectInfo";
import HomeForm from "./HomeForm/HomeForm";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useState } from "react";

export default function HomeLayaot() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4200/api/teacher/all"
        );
        setTeachers(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <>
      <div>
        <h2>Список преподавателей</h2>
        <ul>
          {teachers.map((teacher) => (
            <li key={teacher.id}>
              {teacher.fullName} — {teacher.description}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.container}>
        <HomeTitle />
        <HomeDescription />
        <HomeSlider />
        <HomeTeachers />
        <HomeProjectInfo />
        <HomeForm />
      </div>
      <Footer />
    </>
  );
}
