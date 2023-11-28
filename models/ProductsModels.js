import mongoose from "mongoose";
import Category from "./CategoryModels.js";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    ingredient: {
        type: String,
        required: true,
    },

    description : {
        type: String,
        required: true,
    },
    richDescription : {
        type: String,
        default: ''
    },
    image : {
        type: String,
        default: ''
    },
    images : [{
        type: String,
    }],
    price: {
        type: Number,
        default: 0
    },
    category: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },    

});

// parsing _id become id 
productSchema.virtual('id').get(function (){
    return this._id.toHexString();
});

productSchema.set('toJSON', {
    virtuals:true,
})

const Product = mongoose.model('Product', productSchema);

export default Product