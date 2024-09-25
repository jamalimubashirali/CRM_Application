import express from 'express';
import { registerUser, userLogin } from '../controllers/userLoginAndRegister.js';
import { createCustomer, deleteCustomer, getCustomers, updateCustomerData } from '../controllers/customer.js';
import { createLead , deleteLead, getAllLeads, getLeadById, updateLead } from '../controllers/leads.js';

const router = express.Router();

// Login and Registration Routes
router.post('/register', registerUser);
router.post('/login' , userLogin);

// Customer CRUD Routes
router.get('/customer' , getCustomers);
router.post('/customer' , createCustomer);
router.patch('/customer/:id', updateCustomerData);
router.delete('/customer/:id' , deleteCustomer);

// Lead CURD Routes
router.post('/leads' , createLead);
router.get('/leads' , getAllLeads);
router.get('/leads/:id' , getLeadById);
router.patch('/leads/:id' , updateLead);
router.delete('/leads/:id' , deleteLead);


export default router;