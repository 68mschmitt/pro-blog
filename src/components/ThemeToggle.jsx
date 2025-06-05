import React from "react";
import { useTheme } from "../hooks/useTheme";
import styles from "../styles/ThemeToggle.module.css";

const themes = [
  { key: "light", label: "🌞 Light" },
  { key: "dark", label: "🌚 Dark" },
  { key: "contrast", label: "🖍️ High Contrast" },
];

export default function ThemeToggle() {
  const { theme, setTheme, nextTheme } = useTheme();

  return (
    <div className={styles.toggleGroup} aria-label="Theme chooser">
      <button
        className={styles.toggle}
        onClick={nextTheme}
        aria-label={`Switch theme, current: ${theme}`}
        title="Change theme"
      >
        {themes.find((t) => t.key === theme)?.label || "Theme"}
      </button>
      <div className={styles.themeLabels}>
        {themes.map((t) => (
          <button
            key={t.key}
            className={`${styles.themeBtn} ${theme === t.key ? styles.active : ""}`}
            aria-label={`Set ${t.label} theme`}
            onClick={() => setTheme(t.key)}
            tabIndex={theme === t.key ? -1 : 0}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
