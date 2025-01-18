import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./HomeSlider.module.css";

export default function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4200/api/student/all"
        );
        setStudents(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchStudents();
  }, []);

  const slides = students.map((student) => ({
    leftSide: (
      <>
        <img
          src={`http://localhost:4200/uploads/${student.studentPhotoPath}`}
          alt="avatar"
        />
        <h2>Это {student.fullName}</h2>
        <h3>{student.industry}</h3>
        <p>{student.description}</p>
      </>
    ),
    rightSide: (
      <>
        <img
          src={`http://localhost:4200/uploads/${student.projectPhotoPath}`}
          alt="photoSlider"
        />
      </>
    ),
  }));

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
        <div className={styles.arrowWrapper}>
          <button className={styles.arrow} onClick={handlePrevSlide}>
            🠔
          </button>
          <button className={styles.arrow} onClick={handleNextSlide}>
            🠖
          </button>
        </div>
      </div>
    </div>
  );
}
