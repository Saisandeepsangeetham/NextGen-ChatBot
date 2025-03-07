import { connect, disconnect } from 'mongoose';
export async function connectToDatabase() {
    try {
        await (connect(process.env.MONGODB_URL));
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot connect to Database");
    }
}
export async function disconnectDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot disconnect from Database");
    }
}