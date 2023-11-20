import express from "express";
import dotenv from "dotenv";

// function runing
dotenv.config();
const app = express();

const api = process.env.API_URL;
const port = process.env.PORT;


// middleware

// route
app.get('/', (req, res)=>{
    console.log("test");
})

// server
app.listen(port, ()=>{
    console.log(`Server Running At ${port}`);
});