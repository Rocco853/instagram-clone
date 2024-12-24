import express from "express";

const router = express.Router();

//update user
router.put("/:id");

//delete user
router.delete("/:id");

//get a user
router.get("/find/:id");

//follow a user
router.put("/follow/:id");

//unfollow a user
router.put("/unfollow/:id");

//like a video
router.put("/like/:postId");

export default router;
