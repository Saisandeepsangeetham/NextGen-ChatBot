import mongoose from "mongoose";
import { randomUUID } from "crypto";
const partSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
});
const chatSchema = new mongoose.Schema({
    id: {
        type: String,
        default: () => randomUUID(),
    },
    role: {
        type: String,
        enum: ["user", "model"],
        required: true,
    },
    parts: [partSchema], // Support for multiple parts in a single message
    createdAt: {
        type: Date,
        default: Date.now, // Timestamp for tracking messages
    },
});
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    chats: [chatSchema], // Embed the updated chat schema directly
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt for user records
});
export default mongoose.model("User", userSchema);