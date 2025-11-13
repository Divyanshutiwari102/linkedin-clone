// ✅ PostInput.tsx — Plain CSS version by Divyanshu Tiwari
import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Card from "../UI/Card";
import Avatar from "../UI/Avatar";
import { MdAddAPhoto, MdOutlineArticle } from "react-icons/md";
import { FaBriefcase, FaYoutube } from "react-icons/fa";
import { toast } from "react-toastify";
//import "../../styles/feed.css";

export default function PostInput() {
  const [postReference, setPostReference] = useState("");
  const [user] = useAuthState(auth);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const submitFormHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!postReference.trim()) {
      toast.error("Post content cannot be empty.");
      return;
    }

    try {
      const formData = {
        user: {
          email: user?.email,
          displayName: user?.displayName,
          photoURL: user?.photoURL,
          uid: user?.uid,
        },
        content: postReference.trim(),
        timestamp: serverTimestamp(),
        likes: [],
        comments: [],
        reposts: [],
      };

      await addDoc(collection(db, "posts"), formData);
      toast.success("Post added successfully!");
      setPostReference("");
    } catch (error: any) {
      toast.error(error.message || "Failed to add post.");
    }
  };

  return (
    <Card className="post-input">
      <div className="post-input-top">
        <Avatar url={user?.photoURL as string} />
        <form onSubmit={submitFormHandler}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Start a post"
            value={postReference}
            onChange={(e) => setPostReference(e.target.value)}
            required
            minLength={5}
          />
        </form>
      </div>

      <div className="post-input-options">
        <button className="input-option photo">
          <MdAddAPhoto /> Photo
        </button>
        <button className="input-option video">
          <FaYoutube /> Video
        </button>
        <button className="input-option job">
          <FaBriefcase /> Job
        </button>
        <button className="input-option article">
          <MdOutlineArticle /> Article
        </button>
      </div>
    </Card>
  );
}
