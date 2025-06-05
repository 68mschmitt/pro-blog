import React, { useState } from "react";
import Layout from "./components/Layout";
import ArticleList from "./components/ArticleList";
import ArticleView from "./components/ArticleView";
import { articles } from "./data/articles";
import useModal from "./hooks/useModal";

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { isOpen, open, close } = useModal();

  const handleOpenArticle = (article) => {
    setSelectedArticle(article);
    open();
  };

  const handleCloseArticle = () => {
    close();
    setTimeout(() => setSelectedArticle(null), 300); // matches animation
  };

  return (
    <Layout>
      <ArticleList articles={articles} onOpenArticle={handleOpenArticle} />
      <ArticleView
        article={selectedArticle}
        isOpen={isOpen}
        onClose={handleCloseArticle}
      />
    </Layout>
  );
}
