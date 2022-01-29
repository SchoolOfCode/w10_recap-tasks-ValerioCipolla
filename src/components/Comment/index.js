import React from "react";

const Comment = ({ name, text }) => {
  return <div className="comment">
    <h4>{name}</h4>
    <p>{text}</p>
  </div>;
};

export default Comment;
