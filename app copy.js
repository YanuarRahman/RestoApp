import express from "express";
const app = express();
import dotenv from "dotenv";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";

dotenv.config();

// middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));

const port = process.env.PORT;
// const connDB = process.env.CONN_DB

// schema 
const productSchema = mongoose.Schema({
    name:String,
    image:String,
    CountInStock:Number
})

const Product = mongoose.model('Product', productSchema)

// route
const api = process.env.API_URL;

app.get(`${api}/products`, async (req, res) => {
    const productList = await Product.find();
    res.send(productList);
});

app.post(`${api}/products`, (req, res) =>{
    const product = new Product({
        name : req.body.name,
        image: req.body.image,
        CountInStock: req.body.CountInStock,
    })

    product.save().then((createdProduct=> {
        res.status(201).json(createdProduct)
    })).catch((err)=>{
        res.status(500).json({
            error:err,
            success:false
        })
    })
});

// conection database
mongoose.connect(process.env.CONN)
.then (() => {
    console.log('database connection is ready')
})
.catch((err) => {
    console.log(err);
});

// // Check for successful connection
// mongoose.connection.on('connected', () => {
//     console.log('MongoDB connected successfully');
// });

// // Check for connection errors
// mongoose.connection.on('error', (err) => {
//     console.error('MongoDB connection error:', err);
// });

// // Check for connection disconnection
// mongoose.connection.on('disconnected', () => {
//     console.log('MongoDB disconnected');
// });


// server
app.listen(port, () => {
    console.log(`Server Running At ${port}`);
});