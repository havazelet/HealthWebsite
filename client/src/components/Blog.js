import React from "react";
import articles from "../data/blog.json";
import "../style/blog.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FullArticle from "./blog/FullArticle";
import Articles from "./blog/Articles";

function Blog() {
  return (
    <div className="blog-page">
      <Router>
        <Route exact path="/">
          <Articles articles={articles} />
        </Route>
        <Route path="/home">
          <Articles articles={articles} />
        </Route>
        <Route path="/articles/:title">
          <FullArticle articles={articles} />
        </Route>
      </Router>
    </div>
  );
}

export default Blog;
