import User from    "../models/UserModels.js"

const getData = async (req, res) => {
    const userList = await User.find();
    res.send(userList);
};

const addData = (req, res) =>{
        const user = new User({
            name: req.body.name,
            image: req.body.image,
        })
    
        user.save().then((createdUser =>{
            res.status(201).json(createdUser)
        })).catch((err)=> {
            res.status(500).json({
                error: err,
                success: false
            })
        })
    };

// app.post(`${api}/products`, 

export {getData, addData}