import React from "react";
import styles from "../styles/ArticleCard.module.css";

export default function ArticleCard({ article, onClick }) {
  return (
    <article
      className={styles.card}
      tabIndex={0}
      role="button"
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
      aria-label={`Read article: ${article.title}`}
    >
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>{article.title}</h2>
        <span className={styles.cardDate}>{article.date}</span>
      </div>
      <p className={styles.cardSummary}>{article.summary}</p>
    </article>
  );
}
