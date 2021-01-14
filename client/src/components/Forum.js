import React, { useState } from "react";
import PostCreate from "./forum/PostCreate";
import PostList from "./forum/PostList";
import "../style/forum.css";

function Forum() {
  const [showPostCreate, setShowPostCreate] = useState(false);

  const handleClick = () => {
    setShowPostCreate(true);
  };

  return (
    <div className="forum-page">
        <div className="post">
          {showPostCreate ? (
            <PostCreate />
          ) : (
            <div className="forum" >
              <h1 className="posts-text">posts</h1>
              <div className="newpost-button">
                <button
                  className="btn btn-warning"
                  onClick={() => handleClick()}
                >
                  new post
                </button>
              </div>
            </div>
          )}
        </div>
        <PostList />
    </div>
  );
}

export default Forum;
