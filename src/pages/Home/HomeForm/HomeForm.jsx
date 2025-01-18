import React, { useState } from "react";
import styles from "./HomeForm.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import download from "../../../../public/download.png";

export default function HomeForm() {
  const [fileName, setFileName] = useState(""); // Состояние для имени файла
  const [formData, setFormData] = useState({
    organizationName: "",
    contactPerson: "",
    phoneNumber: "",
    email: "",
    deadline: "",
    description: "",
    file: null,
    firstCategory: "",
    secondCategory: "",
  });

  const handleFirstSelectChange = (event) => {
    const value = event.target.value;
    setFirstSelect(value);

    setFormData((prevData) => ({
      ...prevData,
      firstCategory: value,
    }));

    if (value === "Программирование") {
      setSecondSelectOptions([
        "Разработка сайта",
        "Разработка мобильного приложения",
        "Разработка VR/AR",
      ]);
    } else if (value === "Креатив") {
      setSecondSelectOptions([
        "Дизайн сайта",
        "Разработка логотипа",
        "Фото/Видео съемка",
      ]);
    } else {
      setSecondSelectOptions([]);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : ""); // Обновляем имя файла
    setFormData((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { file, ...data } = formData;
    const formDataToSend = new FormData();

    Object.keys(data).forEach((key) => {
      formDataToSend.append(key, data[key]);
    });

    if (file) {
      formDataToSend.append("file", file);
    }

    try {
      const response = await fetch(
        "http://localhost:4200/api/requests/sendRequest",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
      toast.success("Данные успешно отправлены!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Ошибка при отправке данных.");
    }
  };
  return (
    <div className={styles.wrapper}>
      <ToastContainer />
      <div className={styles.container}>
        <div className={styles.inner}>
          <form onSubmit={handleSubmit}>
            <div className={styles.column}>
              <div className={styles.fullWidth}>
                <input
                  type="text"
                  id="organization"
                  name="organizationName"
                  onChange={handleChange}
                  placeholder="Наименование организации"
                />
              </div>
              <div className={styles.fullWidth}>
                <input
                  type="text"
                  id="contact-person"
                  name="contactPerson"
                  onChange={handleChange}
                  placeholder="Контактное лицо"
                />
              </div>
              <div className={styles.fullWidth}>
                <input
                  type="text"
                  id="phone"
                  name="phoneNumber"
                  onChange={handleChange}
                  placeholder="Контактный номер телефона"
                />
              </div>
              <div className={styles.fullWidth}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Электронная почта"
                />
              </div>
              <div className={styles.fullWidth}>
                <input
                  type="text"
                  id="deadline"
                  name="deadline"
                  onChange={handleChange}
                  placeholder="Сроки выполнения"
                />
              </div>

              <div className={styles.fullWidth}>
                <input
                  type="file"
                  id="file-upload"
                  name="file-upload"
                  onChange={handleFileChange}
                  style={{ display: "none" }} // Скрываем стандартный инпут
                />
                <label
                  htmlFor="file-upload"
                  className={styles.fileUpload}
                  style={{ cursor: "pointer" }} // Курсор для кнопки
                >
                  <span>{fileName || "Добавить техническое задание"}</span>
                  <img src={download} alt="download" />
                </label>
              </div>
            </div>
            {/* <div className={styles.fullWidth}>

          </div> */}
          </form>
          <div className={styles.text}>
            <h1>Ваша заявка</h1>
            <h2>— первый шаг к нашей совместной работе!</h2>
            <button type="submit" className={styles.submiBtn}>
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
