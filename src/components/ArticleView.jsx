import React, { useEffect, useRef } from "react";
import styles from "../styles/ArticleView.module.css";

export default function ArticleView({ article, isOpen, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      className={`${styles.backdrop} ${isOpen ? styles.open : ""}`}
      aria-hidden={!isOpen}
      tabIndex={-1}
      onClick={onClose}
    >
      <article
        className={`${styles.modal} ${isOpen ? styles.open : ""}`}
        role="dialog"
        aria-modal="true"
        tabIndex={0}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        {article && (
          <>
            <header className={styles.modalHeader}>
              <h2>{article.title}</h2>
              <button
                className={styles.closeBtn}
                onClick={onClose}
                aria-label="Close article"
              >
                &times;
              </button>
            </header>
            <span className={styles.modalDate}>{article.date}</span>
            <section className={styles.modalContent}>
              {article.content}
            </section>
          </>
        )}
      </article>
    </div>
  );
}
