import  Express  from "express";
import { getUser, addUser, getDetailUser, updateUser, deleteUser } from "../controllers/userController.js";

const router = Express.Router();

router.get('/users', getUser);
router.get('/users/:id', getDetailUser);
router.post('/users', addUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
export default router