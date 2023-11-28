import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    likeIngredient: {
        type:String,
    },
    spiceLevel:{
        type:String,
        default:'0'
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }

});

userSchema.virtual('id').get(function (){
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals:true,
})

const User = mongoose.model('User', userSchema);

export default User