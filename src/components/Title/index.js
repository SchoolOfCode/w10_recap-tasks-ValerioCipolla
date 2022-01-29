import React from "react";
import * as css from "./title.module.css";

const Title = ({ text }) => {
  return <h1 className={css.title}>{text}</h1>;
};

export default Title;
