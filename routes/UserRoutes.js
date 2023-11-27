import  Express  from "express";
import { getData, addData } from "../controllers/userController.js";

const router = Express.Router();

router.get('/users', getData);
router.post('/users', addData);
export default router