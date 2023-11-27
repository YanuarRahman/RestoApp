import Order from    "../models/OrderModels.js"

const getData = async (req, res) => {
    const OrderList = await Order.find();
    res.send(OrderList);
};

const addData = (req, res) =>{
        const order = new Order({
            name: req.body.name,
            image: req.body.image,
        })
    
        order.save().then((createdOrder =>{
            res.status(201).json(createdOrder)
        })).catch((err)=> {
            res.status(500).json({
                error: err,
                success: false
            })
        })
    };

// app.post(`${api}/products`, 

export {getData, addData}