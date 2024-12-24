import express from "express";

const router = express.Router();

// signup a new user
router.post("/register");

// Login a user
router.post("/login");

export default router;
