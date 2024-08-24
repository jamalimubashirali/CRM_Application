import Customer from "../models/Customer.js";

export const createCustomer = async (req , res) => {
    try {
        const { name , email, phone , company , address , notes , industry} = req.body;
        let customerEmail = await Customer.findOne({email});
        if(customerEmail) {
            res.status(400).json({
                msg : "Customer Already Exits"
            });
        }
        const cutomer = new Customer({
            name,
            email,
            phone,
            company,
            industry,
            address,
            notes,
        });
        await Customer.create(cutomer);
        res.status(201).json({
            msg : `Customer with name ${name} is Created`
        })
    } catch (error) {
        console.log(error);
    }
}

export const getCustomers = async (req , res) => {
    try {
        const customer = await Customer.find({});
        res.status(200).json(customer);
    } catch (error) {
        console.log(error);
    }
}


export const updateCustomerData = async (req , res) => {
    try {
        const {id : customerID} = req.params;
        const updatedCustomerData = req.body;
        const updateCustomer = await Customer.findByIdAndUpdate( {_id : customerID} , updatedCustomerData , {
            new : true,
            runValidators : true
        });

        if (!updateCustomer) {
            res.status(404).json({
                msg : `Customer with id ${customerID} is not Found`
            })
        }

        res.status(200).json({
            msg :  `Customer with id ${customerID} is updatesd`,
            data : updateCustomer
        });
    } catch (error) {
        console.log(error);
    }
}

export const deleteCustomer = async (req , res) => {
    try {
        const {id : customerId} = req.params;
        const customer = await Customer.findByIdAndDelete({_id : customerId});
        if(!customer) {
            res.status(404).json({
                msg : `Customer with id ${customerId} is not found`
            })
        }
        res.status(200).json({
            msg : `Customer with id ${customer._id} is deleted`
        })
    } catch (error) {
        console.log(error);
    }
}