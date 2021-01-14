import React, { useState } from "react";
import axios from "axios";
import "../../style/forum.css";

function PostCreate() {
  const [title, setTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const onSubmit = async (event) => {
    // event.preventDefault();
    await axios.post("http://localhost:4000/posts", {
      title,
      postBody,
    });
 

    setTitle("");
    setPostBody("");
  };

  return (
    <div className="new-post">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>post title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>body</label>
          <textarea
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-warning">submit</button>
      </form>
    </div>
  );
}

export default PostCreate;
