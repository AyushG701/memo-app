import express from "express";
import {
  createUser,
  loginUser,
  getUser,
} from "../contollers/userController.js";
import { authenticateToken } from "../utils/auth.js";

const router = express.Router();

router.post("/create-account", createUser);
router.post("/login", loginUser);
router.get("/get-user", authenticateToken, getUser);

export default router;
