import React, { useState } from "react";
import { nanoid } from "nanoid";
import Paragraph from "../Paragraph";
import Comment from "../Comment";

const Article = ({ title, paragraphs, comments }) => {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <>
      <section className="article-section">
        <h2>{title}</h2>
        {paragraphs.map((p) => {
          return <Paragraph key={nanoid()} text={p} />;
        })}
        <button className="like-button" onClick={handleClick}>
          Like 👍
        </button>
        <span> Number of likes: {likes}</span>
      </section>
      <section className="comment-section">
        {comments.map((comment) => {
          return <Comment name={comment.name} text={comment.text} />;
        })}
      </section>
    </>
  );
};

export default Article;
