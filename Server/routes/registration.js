import express from 'express';
import { registerUser, userLogin } from '../controllers/userLoginAndRegister.js';
import { createCustomer, getCustomers } from '../controllers/customer.js';

const router = express.Router();

// Login and Registration Routes
router.post('/register', registerUser);
router.get('/login' , userLogin);

// Customer CRUD Routes

router.get('/customer' , getCustomers);
router.post('/customer' , createCustomer);


export default router;