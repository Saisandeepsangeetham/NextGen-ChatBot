import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";
export const createToken = (id, email, expiresIn) => {
    const payload = { id, email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
    return token;
};
export const verifyToken = (req, res, next) => {
    const token = req.signedCookies[`${COOKIE_NAME}`];
    if (!token || token.trim() === "") {
        return res.status(401).json({ message: "Token is not recieved." });
    }
    return new Promise((resolve, reject) => {
        return jwt.verify(token, process.env.JWT_SECRET, (err, succ) => {
            if (err) {
                reject(err.message);
                return res.status(401).json({ message: "Token has expired" });
            }
            else {
                console.log("Token Verification is successful");
                resolve();
                res.locals.jwtData = succ;
                return next();
            }
        });
    });
};