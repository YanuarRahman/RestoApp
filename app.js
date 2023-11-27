import express from "express";
const app = express();
import dotenv from "dotenv";
import bodyParser from "body-parser";
import morgan from "morgan";
import connectDB from "./database/database.js";
import cors from "cors"
import ProductRouter from "./routes/ProductRoutes.js";
import UserRouter from "./routes/UserRoutes.js";
import OrderRouter from "./routes/OrderRoutes.js";
import CategoryRouter from "./routes/CategoryRoutes.js"

dotenv.config();
connectDB();

// allow request http 
app.use(cors());
app.options('*', cors())

// middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));


const api = process.env.API_URL;
const port = process.env.PORT;
const connDB = process.env.CONN_DB

// routes
app.use(`${api}/`,ProductRouter )
app.use(`${api}/`,UserRouter )
app.use(`${api}/`,OrderRouter )
app.use(`${api}/`,CategoryRouter)

// server
app.listen(port, () => {
    console.log(`Server Running At ${port}`);
});