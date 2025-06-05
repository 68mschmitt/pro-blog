import React from "react";
import ArticleCard from "./ArticleCard";
import styles from "../styles/ArticleList.module.css";

export default function ArticleList({ articles, onOpenArticle }) {
  return (
    <section className={styles.listSection} aria-label="Articles">
      <div className={styles.cardGrid}>
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onClick={() => onOpenArticle(article)}
          />
        ))}
      </div>
    </section>
  );
}
