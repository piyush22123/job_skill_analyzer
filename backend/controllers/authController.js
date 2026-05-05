const User = require("../models/User");
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken");

const handleRegister = async(req, res) => {
    const {name, email, password} = req.body;

    const isUserExist = await User.findOne({email});

    if(isUserExist){
        return res.status(401).json({message:"User already exist"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try{
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        res.status(201).json(user,{ message:"User created successfully" });

    }catch(err){
        return res.status(400).json({message:"Unable to register user"});
    }
}

const handleLogin = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({message:"Invalid email/password"});
        }

        const isMatched = await bcrypt.compare(password, user.password); 
        if(!isMatched){ 
            return res.status(400).json({ message: "Invalid email or password" })
        }

        const token = jwt.sign( 
            { id: user._id },
            process.env.JWT_SECRET, 
            { expiresIn: "1d" } 
        ); 
        
        res.status(200).json( 
            
            { message:"User logged in successfully", token }
        ); 
    } 
    catch(error){ 
        console.log(error);
        return res.status(500).json({message: "Server error, Failed to login user"});
    }
}



module.exports = {handleLogin, handleRegister};
