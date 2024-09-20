import express from 'express';
import { connectDB } from './db/connectDB.js';
import process from 'process';
import router from './routes/routes.js';
import {notFound} from './middleware/not-found.js';
import { errorHandlerMiddleware } from './middleware/error-handler.js'
import cors from 'cors'

// Local Port
const port = process.env.port || 3000
// App Setup
const app = express();
app.use(cors());

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
