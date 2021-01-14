import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
import "../../style/forum.css";



export default () => {
  const [posts, setPosts] = useState({});
  const [postId, setarticleId] = useState(0);
  const wrapperRef = useRef(null);
  const [comments, setComments] = useState('');
  const [comments1, setComments1] = useState([]);
  

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
  };

  const handleShowContent = (postId) => {
    setarticleId(postId);
    // setShowContent(true);
    // document.getElementById(postId);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        //if clicked on outside of element
        if (ref.current && !ref.current.contains(event.target)) {
          // setShowContent(false);
          setarticleId(null);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(wrapperRef);

  return (
    <div className="post-list-body" ref={wrapperRef}>       
      {Object.values(posts).map((post) => {
        return (
          <div className="post-list" key={post.id}>
            {postId === post.id ? (
              <div id={post.id}>
                <div className="forum-details">
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-date"> ({post.date})</p>
                  <p className="post-body">{post.postBody}</p>
                  <hr className="hr" />
                </div>
                <CommentList setComments1={setComments1} postId={post.id}  />
                <CommentCreate postId={post.id} />
                {/* {console.log(comments1)} */}
                {console.log(post)}
              </div>
            ) : (
              <div
                onClick={() => handleShowContent(post.id)}
                className="posts-list"
              >
                <h3 className="post-title">{post.title}</h3>
                <p className="post-date"> ({post.date})
                 {/* {comments1}  */}
                 </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
