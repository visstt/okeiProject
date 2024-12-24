import React from "react";
import styles from "./HomeForm.module.css";

export default function HomeForm() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Ваша заявка — первый шаг к нашей совместной работе!</h1>
        <form>
          <div className={styles.column}>
            <div className={styles.fullWidth}>
              <label htmlFor="organization">Наименование организации</label>
              <input type="text" id="organization" name="organization" />
            </div>
            <div className={styles.fullWidth}>
              <label htmlFor="contact-person">Контактное лицо</label>
              <input type="text" id="contact-person" name="contact-person" />
            </div>
            <div className={styles.fullWidth}>
              <label htmlFor="phone">Контактный номер телефона</label>
              <input type="text" id="phone" name="phone" />
            </div>
            <div className={styles.fullWidth}>
              <label htmlFor="email">Электронная почта</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className={styles.fullWidth}>
              <label htmlFor="deadline">Сроки выполнения</label>
              <input type="text" id="deadline" name="deadline" />
            </div>
            <div className={styles.fullWidth}>
              <select>
                <option value="">Option 1</option>
                <option value="">Option 2</option>
              </select>
            </div>
            <div className={styles.fullWidth}>
              <select>
                <option value="">Option 1</option>
                <option value="">Option 2</option>
              </select>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.fullWidth}>
              <label htmlFor="description">Краткое описание проекта</label>
              <textarea id="description" name="description"></textarea>
            </div>
            <div className={styles.fullWidth}>
              <input type="file" id="file-upload" name="file-upload" />
              <label htmlFor="file-upload" className={styles.fileUpload}>
                <span>Добавить техническое задание</span>
                <i className="fas fa-download"></i>
              </label>
            </div>
          </div>
          <div className={styles.fullWidth}>
            <button type="submit" className={styles.submiBtn}>
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
