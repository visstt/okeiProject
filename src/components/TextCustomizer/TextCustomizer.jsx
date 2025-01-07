import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkDirective from "remark-directive";
import { visit } from "unist-util-visit";
import styles from "./TextCustomizer.module.css";

// Обработка пользовательских директив (например, :::highlight)
const remarkCustomDirectives = () => (tree) => {
  visit(tree, (node) => {
    if (node.type === "containerDirective" && node.name === "highlight") {
      node.data = {
        hName: "div",
        hProperties: { className: "highlight-block" },
      };
    }
  });
};

const TextCustomizer = () => {
  const [inputText, setInputText] = useState(
    `Это пример текста.

:::highlight
Текст в блоке с голубым фоном и отступами.
:::

Продолжение текста.`
  );

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {/* Поле ввода Markdown */}
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{
          width: "50%",
          height: "300px",
          padding: "10px",
          fontFamily: "monospace",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
        placeholder="Введите текст с разметкой :::highlight..."
      />

      {/* Отображение результата */}
      <div
        style={{
          width: "50%",
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
