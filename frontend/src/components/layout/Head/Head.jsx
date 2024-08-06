import React from "react";
import { Helmet } from "react-helmet";
import { useHead } from "./HeadContext";
import { main } from "../../../assets/css/main.css";
import { sub } from "../../../assets/css/sub.css";
import { add } from "../../../assets/css/add.css";
import { style } from "../../../assets/css/style.css";
import { index } from "../../../index.css";

const Head = () => {
  const { head } = useHead();
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title> {head.title}</title>
      <meta name="description" content={head.description} />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" href="" />
    </Helmet>
  );
};

export default Head;
