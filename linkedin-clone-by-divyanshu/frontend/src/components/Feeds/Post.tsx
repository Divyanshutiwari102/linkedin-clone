// ✅ Post.tsx — Plain CSS version by Divyanshu Tiwari
import React, { useState } from "react";
import moment from "moment";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { FaThumbsUp, FaComment, FaShare, FaPaperPlane } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdClear, MdPhotoCameraBack } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { TbMoodAngry } from "react-icons/tb";

import { auth, db } from "../../config";
import type { PostResponseType } from "../../types";
import Card from "../UI/Card";
import Avatar from "../UI/Avatar";
import InputOption from "./InputOption";
import Comments from "./Comments";
import { getRandomIntNumberBetween } from "../../utils";
//import "../../styles/feed.css";

type Props = {
  post: PostResponseType;
  index: number;
  isAllowAction?: boolean;
};

const formatNumber = (number: number) =>
  number >= 1000 ? (number / 1000).toFixed(1) + "k" : number;

const Post = React.forwardRef<HTMLDivElement, Props>(
  ({ post, index, isAllowAction = true }, ref) => {
    const [commentText, setCommentText] = useState("");
    const [commentBoxVisible, setCommentBoxVisible] = useState(false);
    const [user] = useAuthState(auth);

    const commentsCount =
      post?.comments?.length ?? getRandomIntNumberBetween(100, 0);
    const repostsCount =
      post?.reposts?.length ?? getRandomIntNumberBetween(100, 0);
    const likesCount =
      post?.likes?.length ?? getRandomIntNumberBetween(100, 0);

    const showFollowButton =
      post.user?.displayName !== user?.displayName && index % 2 === 0;

    const handleLike = async () => {
      if (!post.id) return;
      try {
        const docRef = doc(db, "posts", post.id);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
          toast.error("Post not found");
          return;
        }
        const postData = docSnap.data();
        const likes = postData.likes || [];
        const userEmail = user?.email;
        const alreadyLiked = likes.some(
          (like: { email: string }) => like.email === userEmail
        );
        const updatedLikes = alreadyLiked
          ? likes.filter((like: { email: string }) => like.email !== userEmail)
          : [...likes, { email: userEmail }];
        await updateDoc(docRef, { ...postData, likes: updatedLikes });
        toast.success(alreadyLiked ? "Unliked the post" : "Liked the post");
      } catch {
        toast.error("Failed to like the post");
      }
    };

    const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!commentText.trim() || !post.id) return;
      try {
        const docRef = doc(db, "posts", post.id);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
          toast.error("Post not found");
          return;
        }
        const existingData = docSnap.data();
        const newComment = {
          text: commentText.trim(),
          user: {
            photoURL: user?.photoURL,
            uid: user?.uid,
            email: user?.email || "Anonymous",
            displayName: user?.displayName || "Anonymous",
          },
          timestamp: {
            seconds: Math.floor(Date.now() / 1000),
            nanoseconds: 0,
          },
        };
        await updateDoc(docRef, {
          ...existingData,
          comments: [newComment, ...(existingData.comments || [])],
        });
        setCommentText("");
        setCommentBoxVisible(false);
        toast.success("Comment added!");
      } catch {
        toast.error("Failed to add comment");
      }
    };

    return (
      <div ref={ref} className="post">
        <Card>
          <div className="post-header">
            <Avatar
              url={post?.user?.photoURL || "/images/linkedin-b.png"}
              alt="profile"
            />
            <div className="post-user">
              <h4>{post?.user?.displayName}</h4>
              <p className="post-follow">
                {post?.user?.displayName !== user?.displayName && "Following"}
              </p>
              <p className="post-time">
                <span>
                  {post.timestamp
                    ? moment(post.timestamp.toDate?.() || new Date()).fromNow()
                    : moment().fromNow()}
                </span>
                <CiGlobe className="icon" />
              </p>
            </div>

            {showFollowButton ? (
              <button className="btn-outline-sm">
                <IoMdAdd /> Follow
              </button>
            ) : (
              <div className="post-options">
                <HiDotsHorizontal />
                <MdClear />
              </div>
            )}
          </div>

          <div className="post-content">{post.content}</div>

          {post.optionPostImage && (
            <img
              className="post-image"
              src={post.optionPostImage}
              alt="post"
              loading="lazy"
            />
          )}

          <div className="post-stats">
            <div className="post-likes">
              <FcLikePlaceholder />
              <FaThumbsUp />
              <FcLike />
              <TbMoodAngry />
              <span>{formatNumber(likesCount)}</span>
            </div>
            <div className="post-meta">
              <p>{formatNumber(commentsCount)} comments</p>
              <p>{formatNumber(repostsCount)} reposts</p>
            </div>
          </div>

          <div className="post-actions">
            <button onClick={handleLike}>
              <FaThumbsUp /> Like
            </button>
            <button onClick={() => setCommentBoxVisible(!commentBoxVisible)}>
              <FaComment /> Comment
            </button>
            <button>
              <FaShare /> Repost
            </button>
            <button>
              <FaPaperPlane /> Send
            </button>
          </div>

          {isAllowAction && commentBoxVisible && (
            <form className="comment-box" onSubmit={handleCommentSubmit}>
              <Avatar url={user?.photoURL as string} />
              <input
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <MdPhotoCameraBack className="camera-icon" />
            </form>
          )}

          {commentBoxVisible && post?.comments?.length ? (
            <Comments comments={post.comments} />
          ) : null}
        </Card>
      </div>
    );
  }
);

export default Post;
