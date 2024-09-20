import express from 'express';
import { registerUser, userLogin } from '../controllers/userLoginAndRegister.js';
import { createCustomer, deleteCustomer, getCustomers, updateCustomerData } from '../controllers/customer.js';

const router = express.Router();

// Login and Registration Routes
router.post('/register', registerUser);
router.post('/login' , userLogin);

// Customer CRUD Routes
router.get('/customer' , getCustomers);
router.post('/customer' , createCustomer);
router.patch('/customer/:id', updateCustomerData);
router.delete('/customer/:id' , deleteCustomer);



export default router;