import Category from    "../models/CategoryModels.js"

const getData = async (req, res) => {
    const CategoryList = await Category.find();
    res.send(CategoryList);
};

const addData = (req, res) =>{
        const category = new Category({
            name: req.body.name,
            image: req.body.image,
        })
    
        category.save().then((createdCategory =>{
            res.status(201).json(createdCategory)
        })).catch((err)=> {
            res.status(500).json({
                error: err,
                success: false
            })
        })
    };

// app.post(`${api}/products`, 

export {getData, addData}