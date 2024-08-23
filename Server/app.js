import express from 'express';
import { connectDB } from './db/connectDB.js';
import process from 'process';
import router from './routes/registration.js';
import {notFound} from './middleware/not-found.js';
import { errorHandlerMiddleware } from './middleware/error-handler.js'
// import { errors } from 'express-async-errors';
// dotenv.config();

// Database Connection String
// const connectionString = "mongodb+srv://jamalimubashirali:jamali786@cluster0.ahmnu.mongodb.net/MERN_Fellowship_FProject?retryWrites=true&w=majority&appName=Cluster0"

// Local Port
const port = process.env.port || 5000
// App Setup
const app = express();

//Middlewares 
app.use(express.json());
app.use("/api", router);

// Error Handling Middlewares
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        await connectDB(process.env.MONGOS_URL).then(() => {
            console.log("Connection Successful!!");
        });
        app.listen(port , console.log(`The server is running on ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();
