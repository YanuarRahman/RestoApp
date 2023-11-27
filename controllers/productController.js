import Product from "../models/ProductsModels.js";

const getData = async (req, res) => {
    const productList = await Product.find();
    res.send(productList);
};

const addData = (req, res) =>{
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
    };

// app.post(`${api}/products`, 

export {getData, addData}