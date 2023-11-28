import User from    "../models/UserModels.js"
import bcrypt from "bcryptjs"

const getUser = async (req, res) =>{
    const userList = await User.find().select('-passwordHash');

    if(!userList) {
        res.status(500).json({success: false})
    } 
    res.send(userList);
};

const getDetailUser = async(req,res)=>{
    const user = await User.findById(req.params.id).select('-passwordHash');

    if(!user) {
        res.status(500).json({message: 'The user with the given ID was not found.'})
    } 
    res.status(200).send(user);
};

const addUser = async (req,res)=>{
    // const salt = bcrypt.genSalt(10);
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
        // passwordHash: req.body.passwordHash,
        phone: req.body.phone,
        likeIngredient: req.body.likeIngredient,
        spiceLevel: req.body.spiceLevel,
        isAdmin: req.body.isAdmin,

    })
    user = await user.save();

    if(!user)
    return res.status(400).send('the user cannot be created!')

    res.send(user);
};

const updateUser = async (req, res)=> {

    const userExist = await User.findById(req.params.id);
    let newPassword
    if(req.body.password) {
        newPassword = bcrypt.hashSync(req.body.password, 10)
    } else {
        newPassword = userExist.passwordHash;
    }

    const user = await User.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            email: req.body.email,
            passwordHash: newPassword,
            phone: req.body.phone,
            likeIngredient: req.body.likeIngredient,
            spiceLevel: req.body.spiceLevel,
            isAdmin: req.body.isAdmin,
        },
        { new: true}
    )

    if(!user)
    return res.status(400).send('the user cannot be created!')

    res.send(user);
};

const deleteUser = (req, res)=>{
    User.findByIdAndDelete(req.params.id).then(user =>{
        if(user) {
            return res.status(200).json({success: true, message: 'the user is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "user not found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
};


export {getUser, addUser, getDetailUser, updateUser, deleteUser}