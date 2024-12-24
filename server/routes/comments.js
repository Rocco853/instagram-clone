import express from "express";

const router = express.Router();

// add a comment on a post
router.post("/");

// delete a comment on a posts
router.delete("/:id");

// get the comments on a post
router.get("/:postId", getComments);

export default router;
