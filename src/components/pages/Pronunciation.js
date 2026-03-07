import React from "react";
import ArticlePage from "../shared/ArticlePage";

function Pronunciation() {
  return <ArticlePage src={`${process.env.PUBLIC_URL}/content/pronunciation.md`} />;
}

export default Pronunciation;
