import  Express  from "express";
import { getData, addData } from "../controllers/orderController.js";

const router = Express.Router();

router.get('/orders', getData);
router.post('/orders', addData);
export default router