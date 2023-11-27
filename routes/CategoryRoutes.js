import  Express  from "express";
import { getData, addData, updateData, deleteData } from "../controllers/categoryController.js";

const router = Express.Router();

router.get('/categories', getData);
router.post('/categories', addData);
router.put('/categories/:id', updateData);
router.delete('/categories/:id', deleteData);
export default router