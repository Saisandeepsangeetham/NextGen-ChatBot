import express from 'express';
import UserRouter from './user.js';
import chatRouter from './chats.js';

const appRouter = express.Router();
appRouter.use('/users', UserRouter);
appRouter.use('/chat', chatRouter);

export default appRouter;