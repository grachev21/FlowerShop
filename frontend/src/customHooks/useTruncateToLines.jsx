import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Хук для ограничения текста до указанного количества строк
 * @param {number} lines - Количество строк для ограничения (по умолчанию 2)
 * @returns {Object} - Возвращает ref и функцию для принудительного обновления
 */
export const useTruncateToLines = (lines = 2) => {
  const textRef = useRef < HTMLDivElement > null;
  const [isTruncated, setIsTruncated] = useState(false);
  const [originalText, setOriginalText] = useState("");

  const truncateText = useCallback(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    const lineHeight = parseInt(getComputedStyle(element).lineHeight) || 24; // Fallback 24px
    const maxHeight = lineHeight * lines;

    // Сохраняем оригинальный текст при первом вызове
    if (!originalText) {
      setOriginalText(element.textContent || "");
    }

    // Восстанавливаем оригинальный текст перед проверкой
    element.textContent = originalText;

    // Если текст уже помещается, ничего не делаем
    if (element.scrollHeight <= maxHeight) {
      setIsTruncated(false);
      return;
    }

    // Начинаем обрезать текст
    let truncatedText = originalText;
    while (element.scrollHeight > maxHeight && truncatedText.length > 0) {
      truncatedText = truncatedText.slice(0, -1);
      element.textContent = truncatedText + "...";
    }

    setIsTruncated(true);
  }, [lines, originalText]);

  // Эффект для первоначального обрезания и обработки ресайза
  useEffect(() => {
    truncateText();

    const handleResize = () => truncateText();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [truncateText]);

  // Функция для принудительного обновления (если текст изменился)
  const updateTruncation = useCallback(() => {
    setOriginalText(""); // Сбросим оригинальный текст, чтобы он обновился
    setTimeout(truncateText, 0); // Дадим время на обновление DOM
  }, [truncateText]);

  return { textRef, isTruncated, updateTruncation };
};
