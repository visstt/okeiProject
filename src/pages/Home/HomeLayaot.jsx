import React from "react";
import HomeTitle from "./HomeTitle/HomeTitle";
import HomeDescription from "./HomeDescription/HomeDescription";
import HomeSlider from "./HomeSlider/HomeSlider";
import HomeTeachers from "./HomeTeachers/HomeTeachers";
import HomeProjectInfo from "./HomeProjectInfo/HomeProjectInfo";
import HomeForm from "./HomeForm/HomeForm";

export default function HomeLayaot() {
  return (
    <div>
      <HomeTitle />
      <HomeDescription />
      <HomeSlider />
      <HomeTeachers />
      <HomeProjectInfo />
      <HomeForm />
    </div>
  );
}
