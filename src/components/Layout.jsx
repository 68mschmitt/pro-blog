import React from "react";
import ThemeToggle from "./ThemeToggle";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1 tabIndex={0} className={styles.title}>Deep Dives Blog</h1>
        <ThemeToggle />
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Deep Dives Blog &mdash; All Rights Reserved
      </footer>
    </div>
  );
}
