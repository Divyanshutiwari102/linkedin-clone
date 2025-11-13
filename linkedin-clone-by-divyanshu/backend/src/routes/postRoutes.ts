import { Router } from "express";
import {
  createPost,
  getPosts,
  toggleLike,
} from "../controllers/postController";
import { verifyFirebaseToken } from "../middleware/verifyFirebaseToken";

const router = Router();

router.get("/", getPosts);
router.post("/", verifyFirebaseToken, createPost);
router.post("/:postId/like", verifyFirebaseToken, toggleLike);

export default router;
