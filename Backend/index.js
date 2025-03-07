import app from './app.js';
import { connectToDatabase } from './Database/connection.js';

const PORT = process.env.PORT || 5000;

connectToDatabase().then(() => {
    app.listen(PORT, () => { console.log('listening on port and connected to database'); });
}).catch((error) => {
    console.log(error);
});