import { GoogleGenerativeAI } from "@google/generative-ai";
import {config} from "dotenv";

config();
export const geminiConfiguration = async () => {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_SECRET);
    return genAI;
};