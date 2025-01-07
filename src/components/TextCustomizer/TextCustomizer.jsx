import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkDirective from "remark-directive";
import { visit } from "unist-util-visit";
import styles from "./TextCustomizer.module.css";

// Обработка пользовательских директив
const remarkCustomDirectives = () => (tree) => {
  visit(tree, (node) => {
    if (node.type === "containerDirective" && node.name === "block") {
      node.data = {
        hName: "div",
        hProperties: { className: "highlight-block" },
      };
    }
  });
};

const TextCustomizer = () => {
  const [inputText, setInputText] = useState(
    `**Жирный текст**

*Курсивный текст*

- Первый элемент маркированного списка
- Второй элемент маркированного списка
- Третий элемент маркированного списка

1. Первый элемент нумерованного списка
2. Второй элемент нумерованного списка
3. Третий элемент нумерованного списка

:::block
Текст внутри блока с голубым фоном.
:::
`
  );

  // Вставка Markdown-разметки
  const insertMarkdown = (syntax) => {
    const textarea = document.getElementById("markdown-input");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const selectedText = inputText.slice(start, end) || "текст";
    const newText =
      inputText.slice(0, start) + syntax(selectedText) + inputText.slice(end);

    setInputText(newText);
    textarea.focus();
    textarea.selectionStart = textarea.selectionEnd =
      start + syntax(selectedText).length;
  };

  // Функция для обработки добавления списка
  const insertList = (type) => {
    const textarea = document.getElementById("markdown-input");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const selectedText = inputText.slice(start, end) || "текст";
    const lines = selectedText
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line);

    // Создаём список в зависимости от типа
    const list = lines
      .map((line, index) => {
        if (type === "unordered") {
          return `- ${line}`;
        } else if (type === "ordered") {
          return `${index + 1}. ${line}`;
        }
        return "";
      })
      .join("\n");

    const newText = inputText.slice(0, start) + list + inputText.slice(end);

    setInputText(newText);
    textarea.focus();
    textarea.selectionStart = textarea.selectionEnd = start + list.length;
  };

  // Обработка клавиш
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const textarea = e.target;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      const before = inputText.slice(0, start);
      const after = inputText.slice(end);

      // Вставляем перенос строки
      const addition = "\n\n";
      const newText = before + addition + after;

      setInputText(newText);

      // Перемещаем курсор после добавленного текста
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd =
          start + addition.length;
      }, 0);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
      }}
    >
      {/* Панель управления */}
      <div className={styles.toolbar}>
        <button onClick={() => insertMarkdown((text) => `**${text}**`)}>
          Жирный
        </button>
        <button onClick={() => insertMarkdown((text) => `*${text}*`)}>
          Курсив
        </button>
        <button onClick={() => insertList("unordered")}>
          Маркированный список
        </button>
        <button onClick={() => insertList("ordered")}>
          Нумерованный список
        </button>
        <button
          onClick={() => insertMarkdown((text) => `:::block\n${text}\n:::\n`)}
        >
          Блок
        </button>
      </div>

      {/* Поле ввода Markdown */}
      <textarea
        id="markdown-input"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown} // Обработка клавиш
        style={{
          width: "100%",
          height: "300px",
          padding: "10px",
          fontFamily: "monospace",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
        placeholder="Введите текст с разметкой..."
      />

      {/* Отображение результата */}
      <div
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          backgroundColor: "#f9f9f9",
          overflowY: "auto",
        }}
      >
        <ReactMarkdown
          remarkPlugins={[remarkDirective, remarkCustomDirectives]}
          breaks={true} // Включаем поддержку одиночных переносов
          components={{
            div: ({ node, className, children }) => {
              if (className === "highlight-block") {
                return <div className={styles.highlightBlock}>{children}</div>;
              }
              return <div>{children}</div>;
            },
          }}
        >
          {inputText}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default TextCustomizer;
