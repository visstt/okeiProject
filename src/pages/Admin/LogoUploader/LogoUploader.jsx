import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./LogoUploader.module.css";

const LogoUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [logos, setLogos] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await fetch("http://localhost:4200/api/logo/all");
        const data = await response.json();
        setLogos(data);
      } catch (error) {
        toast.error("Ошибка при загрузке логотипов");
        console.error("Ошибка при загрузке логотипов:", error);
      }
    };

    fetchLogos();
  }, []);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);

    const formData = new FormData();
    formData.append("logo", file);

    try {
      const response = await fetch("http://localhost:4200/api/logo/addLogo", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const newLogo = await response.json();
        setLogos((prevLogos) => [...prevLogos, newLogo]);
        toast.success("Логотип успешно добавлен!");
      } else {
        toast.error("Ошибка при добавлении логотипа.");
      }
    } catch (error) {
      toast.error("Ошибка загрузки.");
      console.error("Ошибка загрузки:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (logoId) => {
    try {
      const response = await fetch(`http://localhost:4200/api/logo/${logoId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setLogos((prevLogos) =>
          prevLogos.filter((logo) => logo.logoId !== logoId)
        );
        toast.success("Логотип успешно удалён!");
      } else {
        toast.error("Ошибка при удалении логотипа.");
      }
    } catch (error) {
      toast.error("Ошибка при удалении логотипа.");
      console.error("Ошибка при удалении логотипа:", error);
    }
  };

  return (
    <div className={styles.container}>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className={styles.addLogo}>
        <h2 className={styles.sectionTitle}>Список логотипов</h2>
        <div className={styles.logoList}>
          {logos.map((logo) => (
            <div key={logo.logoId} className={styles.logoItem}>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(logo.logoId)}
              >
                ×
              </button>
              <img
                src={`http://localhost:4200/uploads/${logo.logoPath}`}
                alt={`Логотип ${logo.logoId}`}
                className={styles.logoImage}
              />
            </div>
          ))}
          {/* Квадрат с плюсом */}
          <label className={styles.addLogoButton}>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className={styles.fileInput}
              disabled={isUploading}
            />
            +
          </label>
        </div>
      </div>
    </div>
  );
};

export default LogoUploader;
