import Product from "../models/ProductsModels.js";
import Category from "../models/CategoryModels.js";
import mongoose from "mongoose";

const getData = async (req , res) => {
    const productList = await Product.find();
    
    if(!productList){
        res.status(500).json({success:false})
    }
    res.send(productList);
};

const detailData = async (req, res) =>{
    if(!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send('Invalid Product Id')
     }

    const product = await Product.findById(req.params.id).populate('category');

    if(!product) {
        res.status(500).json({success: false})
    } 
    res.send(product);
};


const addData = async (req, res) =>{
    // validasi category 
    const category = await Category.findById(req.body.category);
    if(!category) return res.status(400).send('Invalid Category')

    // const file = req.file;
    // if(!file) return res.status(400).send('No image in the request')

    // const fileName = file.filename
    // const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;

    let product = new Product({
        name: req.body.name,
        ingredient: req.body.ingredient,
        // spiceLevel: req.body.spiceLevel,
        description: req.body.description,
        richDescription: req.body.richDescription,
        // image: `${basePath}${fileName}`,// "http://localhost:3000/public/upload/image-2323232"
        image: req.body.image,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        // rating: req.body.rating,
        // numReviews: req.body.numReviews,
    })

    product = await product.save();

    if(!product) 
    return res.status(500).send('The product cannot be created')

    res.send(product);
};


const updateData = async (req, res)=> {
    if(!mongoose.isValidObjectId(req.params.id)) {
       return res.status(400).send('Invalid Product Id')
    }
    const category = await Category.findById(req.body.category);
    if(!category) return res.status(400).send('Invalid Category')

    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            ingredient: req.body.ingredient,
            // spiceLevel: req.body.spiceLevel,
            description: req.body.description,
            richDescription: req.body.richDescription,
            image: req.body.image,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            // rating: req.body.rating,
            // numReviews: req.body.numReviews,
        },
        { new: true}
    )

    if(!product)
    return res.status(500).send('the product cannot be updated!')

    res.send(product);
};

const deleteData = (req, res)=>{
    Product.findByIdAndDelete(req.params.id).then(product =>{
        if(product) {
            return res.status(200).json({success: true, message: 'the product is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "product not found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
};

export {getData, addData, detailData, updateData, deleteData,}