import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../style/forum.css";

function CommentList({ setComments1 ,postId }) { 

  const [comments, setComments] = useState([]);
  const [commentsId, setCommentsId] = useState('');

  
  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:4000/posts/${postId}/comments`
    );
    setComments(res.data);
    console.log(res.data)
  };

  useEffect(() => {
    fetchData();  
     setCommentsId(postId)  
  }, []);

  const renderedComments = comments.map((comment) => {
    return (
      <div key={comment.id}>
        {(setComments1(comments.length))}
        <li  className="tryyy">
          <img
            src="https://www.darehero.com/images/app/profile_placeholder.png?v=83"
            alt="Avatar"
            className="avatar"
          />{" "}
          <div className="comment-text">{comment.content}</div>
        </li>
        <hr className="hr" />
      </div>
    );
  });
  

  return (
    <div className="post-comments" >
      <b> {comments.length} comments</b>
      <ul className="post-comments">{renderedComments}</ul>
    </div>
  );
}

export default CommentList;
