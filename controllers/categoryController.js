import Category from    "../models/CategoryModels.js"

const getData = async (req, res) => {
    let CategoryList = await Category.find();

    if(!CategoryList) {
        res.status(500).json({success: false})
    } 
    res.send(CategoryList);
};

const addData = async(req, res) =>{
        let category = new Category({
            name: req.body.name,
            foodType: req.body.foodType,
        })
        category = await category.save();
    
        if(!category)
        return res.status(404).send('Category Tidak Bisa Dibuat!!');
    
        res.send(category);
    };


const updateData =  async(req, res)=> {
    let category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            foodType: req.body.foodType
        },
        { new: true}
    )

    if(!category)
    return res.status(400).send('the category cannot be created!')

    res.send(category);
};


let deleteData = (req, res)=>{
    Category.findByIdAndDelete(req.params.id).then(category =>{
        if(category) {
            return res.status(200).json({success: true, message: 'the category is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "category not found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
};


export {getData, addData, updateData, deleteData}