import express from "express";
import { login, signup, logout } from "../controller/controller.route.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);

export default router;
