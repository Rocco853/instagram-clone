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
router.put("/view/:id");

// sort post by trending
router.get("/trend");

// sort posts by random
router.get("/random");

// get post by following
router.get("/following");

// get post by tags
router.get("/tags");

// get posts by search
router.get("/search");

export default router;
