import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name:String,
    image:String,
});

const Category = mongoose.model('Categories', categorySchema);

export default Category