export const mockPosts = [
  {
    id: "1",
    content: "Excited to share my first project on LinkedIn Clone! 🚀",
    user: {
      displayName: "Divyanshu Tiwari",
      photoURL: "/images/linkedin-b.png",
    },
    likes: [{ email: "someone@example.com" }],
    comments: [
      {
        text: "Congratulations!",
        user: { displayName: "Rahul" },
        timestamp: { seconds: Math.floor(Date.now() / 1000), nanoseconds: 0 },
      },
    ],
    reposts: [],
    timestamp: { seconds: Math.floor(Date.now() / 1000), nanoseconds: 0 },
  },
  {
    id: "2",
    content: "Just finished an awesome AI project on healthcare diagnostics 🧠",
    user: {
      displayName: "Parul Sharma",
      photoURL: "/images/linkedin-b.png",
    },
    likes: [],
    comments: [],
    reposts: [],
    timestamp: { seconds: Math.floor(Date.now() / 1000), nanoseconds: 0 },
  },
];
