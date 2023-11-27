import  Express  from "express";
import { getData, addData } from "../controllers/categoryController.js";

const router = Express.Router();

router.get('/categories', getData);
router.post('/categories', addData);
export default router