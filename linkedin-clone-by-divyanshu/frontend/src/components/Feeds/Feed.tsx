// ✅ Feed.tsx — Plain CSS version
import React, { useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../config";
import type { PostResponseType } from "../../types";
import { mockPosts } from "../../lib/mockData";
import Post from "./Post";
import PostInput from "./PostInput";
import "../../styles/layout.css";

export default function Feed() {
  const [posts, setPosts] = useState<PostResponseType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const postsQuery = query(
      collection(db, "posts"),
      orderBy("timestamp", "desc"),
      limit(5)
    );

    const unsubscribe = onSnapshot(postsQuery, (snapshot) => {
      const updatedPosts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as PostResponseType[];

      setPosts(updatedPosts);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="loading">Loading posts...</div>;
  }

  return (
    <div className="feed">
      <PostInput />
      <FlipMove>
        {posts.map((post, index) => (
          <Post key={post.id || index} post={post} index={index} isAllowAction />
        ))}
      </FlipMove>

      {mockPosts.map((post, index) => (
        <Post
          key={`mock-${index}`}
          post={post}
          index={index}
          isAllowAction={false}
        />
      ))}
    </div>
  );
}
