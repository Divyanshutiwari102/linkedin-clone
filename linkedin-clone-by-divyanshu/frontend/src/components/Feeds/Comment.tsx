// ✅ Comment.tsx — Plain CSS version by Divyanshu Tiwari
import React from "react";
import Moment from "moment";
import type { CommentT } from "../../types";
import Avatar from "../UI/Avatar";
//import "../../styles/theme.css";

type Props = {
  comment: CommentT;
  hideBorder: boolean;
};

export default function Comment({ comment, hideBorder }: Props) {
  return (
    <div className="comment">
      {!hideBorder && <div className="comment-line"></div>}

      <Avatar
        url={comment.user?.photoURL || "/images/default-avatar.png"}
        alt="User Avatar"
        className="comment-avatar"
      />

      <div className="comment-body">
        <div className="comment-header">
          <p className="comment-name">{comment.user.displayName}</p>
          <p className="comment-username">
            @{comment.user.displayName?.toLowerCase()}
          </p>
          {comment.timestamp?.seconds && (
            <span className="comment-time">
              {Moment.unix(comment.timestamp.seconds).fromNow()}
            </span>
          )}
        </div>
        <p className="comment-text">{comment.text}</p>
      </div>
    </div>
  );
}
