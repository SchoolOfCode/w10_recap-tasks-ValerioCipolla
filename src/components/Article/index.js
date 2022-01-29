import React from "react";
import { nanoid } from "nanoid";
import Paragraph from "../Paragraph";

const Article = ({ title, paragraphs, comments }) => {
  return (
    <section>
      <h2>{title}</h2>
      {paragraphs.map((p) => {
        return <Paragraph key={nanoid()} text={p} />;
      })}
    </section>
  );
};

export default Article;
