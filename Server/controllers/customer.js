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
