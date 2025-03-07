import express from 'express';
import { verifyToken } from '../Utils/token.js';
import { chatCompletionValidator, validate } from '../Utils/validator.js';
import { DeleteAllChats, generateChatCompletion, sendChatsToUser, } from "../Controllers/chatControllers.js";


const chatRouter = express.Router();
chatRouter.post("/new", validate(chatCompletionValidator), verifyToken, generateChatCompletion);
chatRouter.get("/all-chats", verifyToken, sendChatsToUser);
chatRouter.delete("/delete", verifyToken, DeleteAllChats);
export default chatRouter;