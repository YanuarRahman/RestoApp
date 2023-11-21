import express from "express";
const app = express();
import dotenv from "dotenv";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import connectDB from "./database/database.js";

dotenv.config();
connectDB();

// middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));

const productSchema = mongoose.Schema({
    name:String,
    image:String,
    countInStock:String
});

const Product = mongoose.model('Product', productSchema);



const api = process.env.API_URL;
const port = process.env.PORT;
const connDB = process.env.CONN_DB

app.get(`${api}/products`, (req, res) => {
    const product = {
        id:1,
        name:'test',
        image: 'asdsa',
    }
    res.send(product);
});

app.post(`${api}/products`, (req, res) =>{
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
    })

    product.save().then((createdProduct =>{
        res.status(201).json(createdProduct)
    })).catch((err)=> {
        res.status(500).json({
            error: err,
            success: false
        })
    })
});


// conection database
// mongoose.connect(connDB)
// .then (() => {
//     console.log('database connection is ready')
// })
// .catch((err) => {
//     console.log(err);
// });


// server
app.listen(port, () => {
    console.log(`Server Running At ${port}`);
});