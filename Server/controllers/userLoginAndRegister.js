import User from "../models/User.js";
import bcrypt from 'bcrypt';

// Register Function
export const registerUser = async (req , res) => {
    try {
        const { username , email, role , password} = req.body;
        let userEmail = await User.findOne({email});
        if(userEmail) {
            return res.status(400).json({
                msg : "The User already Exists"
            });
        }
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password , salt);
        const  user = new User({
            username, 
            email,
            passwordHash,
            role
        });
        await User.create(user);
        res.status(201).json({
            msg : "User Created Successfully",
        })
    } catch (error) {
        console.log(error);
    }
}

// Login Funtion

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // To verify if the user exsits in the Database
    if (!user) {
      return res.status(404).json({ message: 'User Not Found' });
      // To verify the password of the user.
        const isMatch = await bcrypt.compare(password, user.passwordHash);

        if (!isMatch) {
        return res.status(401).json({ message: 'Invalid Credentials' });
    }
    }
    // Message After Successful Login.
    res.status(200).json({ message: 'User Login Successful' }); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
