import React from "react";
import styles from "./AdminPanel.module.css";
import LogoUploader from "./LogoUploader/LogoUploader";
import Teachers from "./Teachers/Teachers";

export default function AdminPanel() {
  return (
    <div>
      <h1 className={styles.title}>Панель администратора</h1>
      <LogoUploader />
      <Teachers />
    </div>
  );
}
