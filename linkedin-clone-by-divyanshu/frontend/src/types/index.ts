// =============================
// 🔹 AUTH TYPES
// =============================

export type AuthRequestType = {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  imageUrl?: string;
};

export type AuthLoginRequestType = {
  email: string;
  password: string;
  acceptTerms?: boolean;
};

// =============================
// 🔹 CHAT TYPES
// =============================

export type ChatMessage = {
  id: string;
  senderId: string;
  receiverId: string;
  message: string;
  timestamp: {
    seconds: number;
    nanoseconds: number;
  };
};

export type ChatUser = {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
};

// =============================
// 🔹 JOB TYPES
// =============================

export type JobType = {
  id: string;
  title: string;
  company: string;
  location: string;
  postedAt?: string;
  description?: string;
};

// =============================
// 🔹 NOTIFICATION TYPES
// =============================

export type NotificationType = {
  id: string;
  userId: string;
  message: string;
  read: boolean;
  timestamp: {
    seconds: number;
    nanoseconds: number;
  };
};

// =============================
// 🔹 POST & COMMENT TYPES
// =============================

export type CommentT = {
  text: string;
  user: {
    displayName: string;
    photoURL?: string;
    email?: string;
    uid?: string;
  };
  timestamp?: {
    seconds: number;
    nanoseconds: number;
  };
};

export type PostResponseType = {
  id?: string;
  user: {
    displayName: string;
    email?: string;
    photoURL?: string;
    uid?: string;
  };
  content?: string;
  timestamp?: any;
  likes?: { email?: string | null }[];
  comments?: CommentT[];
  reposts?: any[];
  optionPostImage?: string;
};

// =============================
// 🔹 GENERIC USER TYPE
// =============================

export type FirestoreUser = {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
};
