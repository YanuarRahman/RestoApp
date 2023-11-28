import  Express  from "express";

import { getData, addData, detailData, updateData, deleteData,} from "../controllers/productController.js";
// fungsi routes express
const router = Express.Router();

// routes
router.get('/products', getData);
router.get('/products/:id', detailData);
router.post('/products', addData);
router.put('/products/:id', updateData);
router.delete('/products/:id', deleteData);


export default router