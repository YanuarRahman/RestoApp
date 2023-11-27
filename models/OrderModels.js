import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    name:String,
    image:String,
});

const Order = mongoose.model('Order', orderSchema);

export default Order