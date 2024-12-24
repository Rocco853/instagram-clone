import express from "express";

const router = express.Router();

//add a post
router.post("/");

// update a post ID
router.put("/:id");

// delete a post by ID
router.delete("/:id");

// find post by ID
router.get("/find/:id");

// add a view per post (videos)
router.put("/view/:id", addView);

// sort post by trending
router.get("/trend", trend);

// sort posts by random
router.get("/random", random);

// get post by following
router.get("/following");

// get post by tags
router.get("/tags");

// get posts by searcvh
router.get("/search");

export default router;
