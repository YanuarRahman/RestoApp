import  Express  from "express";

import { getData, addData } from "../controllers/productController.js";
// fungsi routes express
const router = Express.Router();

// routes
router.get('/products', getData);
router.post('/products', addData);

export default router