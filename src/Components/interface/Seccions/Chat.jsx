import React, { useEffect, useState, useRef } from "react";
import sent from "../../../assets/sent.svg";

export function Chat() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const commentsEndRef = useRef(null);

  useEffect(() => {
    const localComments = localStorage.getItem("comments");
    if (localComments) {
      setComments(JSON.parse(localComments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
    commentsEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [comments]);

  useEffect(() => {
    const interval = setInterval(() => {
      setComments((comments) => {
        const now = Date.now();
        return comments.filter((comment) => now - comment.timestamp < 60000);
      });
    }, 160000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTimestamp = Date.now();
    const newCommentObject = { text: newComment, timestamp: newTimestamp };
    setComments([...comments, newCommentObject]);
    setNewComment("");
  };

  return (
    <div className="seccions-chat">
      <div className="chat">
        <div className="text">
          {comments.map((comment, index) => (
            <div className="mesaje" key={index}>
              <h1>{comment.text}</h1>
            </div>
          ))}
          <div ref={commentsEndRef} />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="contain-form">
        <input
          type="text"
          placeholder="Escribe un mensaje"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />

        <button type="submit">
          <img src={sent} />
        </button>
      </form>
    </div>
  );
}
