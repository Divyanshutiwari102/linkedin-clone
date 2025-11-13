// ✅ Comments.tsx — Plain CSS version by Divyanshu Tiwari
import React from "react";
import type { CommentT } from "../../types";
import Comment from "./Comment";
//import "../../styles/feed.css";

type Props = {
  comments: CommentT[];
};

export default function Comments({ comments }: Props) {
  return (
    <div className="comments-section">
      {comments.map((comment, index) => (
        <Comment
          key={`${index}-${comment.timestamp?.nanoseconds || Math.random()}`}
          comment={comment}
          hideBorder={index === comments.length - 1}
        />
      ))}
    </div>
  );
}
