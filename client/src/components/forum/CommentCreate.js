import React, { useState } from "react";
import axios from "axios";


function CommentCreate({ postId }) {
  const [content, setContent] = useState("");
  

  const onSubmit = async (event) => {
    await axios.post(`http://localhost:4000/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };

  return (
    <div className="comment">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Add a comment</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
            required
          ></textarea>
        </div>
        <button className="btn btn-warning">submit</button>
      </form>
    </div>
  );
}

export default CommentCreate;
