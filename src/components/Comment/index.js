import React from "react";
import * as css from "./comment.module.css";

const Comment = ({ name, text }) => {
  return (
    <div className={css.comment}>
      <h4>{name}</h4>
      <p>{text}</p>
    </div>
  );
};

export default Comment;
