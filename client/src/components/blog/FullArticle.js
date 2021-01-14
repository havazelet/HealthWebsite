import React from "react";
import { useParams } from "react-router-dom";

function FullArticle({ articles }) {
  const { title } = useParams();
  
  return (
    <div className="articles">
      <div className="article-content">
        {articles
          .filter((article) => article.title === title)
          .map((article, index) => (
            <div key={index}>
              <h1>{article.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default FullArticle;
