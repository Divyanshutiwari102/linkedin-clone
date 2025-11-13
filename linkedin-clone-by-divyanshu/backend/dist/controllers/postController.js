"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = createPost;
exports.getPosts = getPosts;
exports.toggleLike = toggleLike;
const postModel_1 = require("../models/postModel");
async function createPost(req, res) {
    try {
        const { uid } = req;
        const { content, image } = req.body;
        if (!uid)
            return res.status(401).json({ message: "Unauthorized" });
        if (!content)
            return res.status(400).json({ message: "Content required" });
        const post = await postModel_1.PostModel.create({
            authorUid: uid,
            content,
            image,
        });
        return res.status(201).json(post);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
}
async function getPosts(req, res) {
    try {
        const posts = await postModel_1.PostModel.find().sort({ createdAt: -1 }).limit(50);
        return res.json(posts);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
}
async function toggleLike(req, res) {
    try {
        const { uid } = req;
        const { postId } = req.params;
        if (!uid)
            return res.status(401).json({ message: "Unauthorized" });
        const post = await postModel_1.PostModel.findById(postId);
        if (!post)
            return res.status(404).json({ message: "Post not found" });
        const already = post.likes.includes(uid);
        if (already) {
            post.likes = post.likes.filter((u) => u !== uid);
        }
        else {
            post.likes.push(uid);
        }
        await post.save();
        return res.json(post);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
}
