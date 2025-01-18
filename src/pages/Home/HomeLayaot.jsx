import React from "react";
import styles from "./HomeLayaot.module.css";
import HomeTitle from "./HomeTitle/HomeTitle";
import HomeDescription from "./HomeDescription/HomeDescription";
import HomeSlider from "./HomeSlider/HomeSlider";
import HomeTeachers from "./HomeTeachers/HomeTeachers";
import HomeProjectInfo from "./HomeProjectInfo/HomeProjectInfo";
import HomeForm from "./HomeForm/HomeForm";
import Footer from "../../components/Footer/Footer";

export default function HomeLayaot() {
  return (
    <>
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
