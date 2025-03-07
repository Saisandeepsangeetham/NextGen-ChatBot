import User from "../Models/user.js";
import { geminiConfiguration } from "../Config/gemini-config.js";

export const generateChatCompletion = async (req, res, next) => {
    const { message } = req.body;
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).json({ message: "User is not registered." });
        }
        const history = user.chats.map(({ role, parts }) => ({
            role,
            parts: parts.map((part) => ({ text: part.text })),
        }));
        history.push({
            role: "user",
            parts: [{ text: message }],
        });
        user.chats.push({
            role: "user",
            parts: [{ text: message }],
            createdAt: new Date(),
        });
        const genAI = await geminiConfiguration();
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const chat = model.startChat({ history });
        const chatResponse = await chat.sendMessage(message);
        console.log("Full chatResponse:", chatResponse.response.text());
        user.chats.push({
            role: "model",
            parts: [{ text: chatResponse.response.text() }],
            createdAt: new Date(),
        });
        await user.save();
        const formattedChats = user.chats.map(chat => ({
            role: chat.role,
            content: chat.parts[0]?.text,
            createdAt: chat.createdAt,
        }));
        return res.status(200).json({ chats: formattedChats });
    }
    catch (error) {
        console.error("Error in generateChatCompletion:", error);
        return res.status(500).json({ message: "Something went wrong." });
    }
};

export const sendChatsToUser = async (req, res, next) => {
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).send("User not registered Or Token malfunctioned");
        }
        if (user._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permissions didn't match");
        }
        const formattedChats = user.chats.map(chat => ({
            role: chat.role,
            content: chat.parts[0]?.text,
            createdAt: chat.createdAt,
        }));
        return res.status(200).json({ message: "Ok", chats: formattedChats });
    }
    catch (error) {
        console.log(error);
        return res.status(501).json({ message: "Error", cause: error.message });
    }
};

export const DeleteAllChats = async (req, res, next) => {
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).send("User not registered Or Token Malfunctioned");
        }
        if (user._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permissions didn't Match");
        }
        //@ts-ignore
        user.chats = [];
        await user.save();
        return res.status(200).json({ message: "Ok" });
    }
    catch (error) {
        console.log(error);
        return res.status(501).json({ message: "Error", cause: error.message });
    }
};