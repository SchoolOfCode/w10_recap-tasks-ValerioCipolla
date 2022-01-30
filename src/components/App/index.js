import React, { useState, useEffect } from "react";
import data from "../../libs/articles";
import Title from "../Title";
import Article from "../Article";
import { nanoid } from "nanoid";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import Profile from "../Profile";
import { useAuth0 } from "@auth0/auth0-react";
import PreLoginSection from "../PreLoginSection";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setArticles(data);
  }, []);

  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Profile
        user={user}
        isAuthenticated={isAuthenticated}
        isLoading={isLoading}
      />
      {isAuthenticated ? (
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
      ) : (
        <PreLoginSection />
      )}
    </>
  );
}

export default App;
