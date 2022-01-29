import React, { useState } from "react";
import { nanoid } from "nanoid";
import Paragraph from "../Paragraph";
import Comment from "../Comment";
import * as css from "./article.module.css";

const Article = ({ title, paragraphs, comments }) => {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div className={css.article}>
      <section className="article-section">
        <h2>{title}</h2>
        {paragraphs.map((p) => {
          return <Paragraph key={nanoid()} text={p} />;
        })}
        <div className={css.likeBar}>
        <button className="like-button" onClick={handleClick}>
          Like 👍
        </button>
        <span> Number of likes: {likes}</span>
        </div>
      </section>
      <section className="comment-section">
        {comments.map((comment) => {
          return (
            <Comment key={nanoid()} name={comment.name} text={comment.text} />
          );
        })}
      </section>
    </div>
  );
};

export default Article;
