import React, { useState, useEffect } from "react";
import data from "../../libs/articles";
import Title from "../Title";
import Article from "../Article";
import { nanoid } from "nanoid";

function App() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setArticles(data);
  }, []);

  return (
    <div className="App">
      <Title text="WikiPigeon" />
      {articles &&
        articles.map((article) => {
          return (
            <Article
              key={nanoid()}
              title={article.title}
              paragraphs={article.paragraphs}
              comments={article.comments}
            />
          );
        })}
    </div>
  );
}

export default App;
