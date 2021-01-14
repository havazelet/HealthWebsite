import React from "react";
import { Link } from "react-router-dom";
import "../../style/blog.css";

function Articles({ articles }) {
  return (
    <div>
      <div className="articles">
        {articles.map((article, index) => (
          <div key={index}>
            <Link to={`/articles/${article.title}`}>
                <div className="article-details">
                  <div className="article-image">
                    <img src={article.image_url} alt={article.title} />
                  </div>
                  <div className="article-text">
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <p>by {article.author}</p>
                  </div>
                </div>
                <hr width="97%"></hr>      
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
