import User from "../Models/user.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../Utils/token.js";
import { COOKIE_NAME } from "../Utils/constants.js";
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};
export const signupUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        console.log(name, email, password);
        const user_res = await User.findOne({ email });
        if (user_res) {
            return res.status(422).json({ message: "Already Registered" });
        }
        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        //clear the previous cookies.
        res.clearCookie(COOKIE_NAME, {
            path: "/",
            domain: "localhost",
            httpOnly: true,
            signed: true,
        });
        //create a toke and a cookie.
        const token = createToken(user._id.toString(), user.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, {
            path: "/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed: true,
        });
        return res
            .status(200)
            .json({ message: "Ok", name: user.name, email: user.email });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};
export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user_res = await User.findOne({ email });
        if (!user_res) {
            return res.status(422).json({ message: "User not registered" });
        }
        const isPasswordCorrect = await compare(password, user_res.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Invalid Password" });
        }
        //clear the previous cookies.
        res.clearCookie(COOKIE_NAME, {
            path: "/",
            domain: "localhost",
            httpOnly: true,
            signed: true,
        });
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        //creating the token for the user.
        const token = createToken(user_res._id.toString(), user_res.email, "7d");
        res.cookie(COOKIE_NAME, token, {
            path: "/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed: true,
        });
        return res
            .status(200)
            .json({ message: "Ok", name: user_res.name, email: user_res.email });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};
export const logoutUser = async (req, res, next) => {
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).send("User not Registered or Token malfunctioned");
        }
        if (user._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permission denied");
        }
        res.clearCookie(COOKIE_NAME, {
            path: "/",
            domain: "localhost",
            httpOnly: true,
            signed: true,
        });
        return res
            .status(200)
            .json({ message: "Ok", name: user.name, email: user.email });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};
export const verifyUser = async (req, res, next) => {
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).send("User not Registered or Token malfunctioned");
        }
        if (user._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permission denied");
        }
        return res
            .status(200)
            .json({ message: "Ok", name: user.name, email: user.email });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};