import User from "../models/User.js";
import bycrypt from 'bcrypt';


export const registerUser = async (req , res) => {
    try {
        const { username , email, role , password} = req.body;
        console.log(username , password, email, role);
        let userEmail = await User.findOne({email});
        if(userEmail) {
            return res.status(400).json({
                msg : "The User already Exists"
            });
        }
        const salt = await bycrypt.genSalt(10);
        console.log(salt);
        const passwordHash = await bycrypt.hash(password , salt);
        console.log(passwordHash);
        const  user = new User({
            username, 
            email,
            passwordHash,
            role
        });
        await User.create(user);
        res.send(201).json({
            msg : "User Created Successfully"
        })
    } catch (error) {
        console.log(error);
    }
}

