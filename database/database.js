import mongoose from "mongoose";
// conection database
const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.CONN_DB);
        console.log(`Database Connected ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`MongoDB eerorr ${error}`);
    }
};


export default connectDB;