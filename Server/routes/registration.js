import express from 'express';
import { registerUser, userLogin } from '../controllers/userLoginAndRegister.js';

const router = express.Router();

router.post('/register', registerUser);
router.get('/login' , userLogin);

export default router;