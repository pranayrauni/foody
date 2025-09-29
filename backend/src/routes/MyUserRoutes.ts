import express from "express"
import MyUserController from "../controllers/MyUserController.js";
import { jwtCheck } from "../middlewares/auth.js";

const router = express.Router();


router.post("/", jwtCheck, MyUserController.createCurrentUser)

export default router;