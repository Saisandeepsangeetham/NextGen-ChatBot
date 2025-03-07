import express from "express";
import { getAllUsers, loginUser, logoutUser, signupUser, verifyUser, } from "../Controllers/userControllers.js";
import { loginValidator, signupValidator, validate, } from "../Utils/validator.js";
import { verifyToken } from "../Utils/token.js";

const UserRouter = express.Router();

UserRouter.get("/", getAllUsers);
UserRouter.post("/signup", validate(signupValidator), signupUser);
UserRouter.post("/login", validate(loginValidator), loginUser);
UserRouter.get("/auth-status", verifyToken, verifyUser);
UserRouter.get("/logout", verifyToken, logoutUser);

export default UserRouter;