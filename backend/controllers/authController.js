import { compare } from 'bcrypt'
import { comparepassword, hashPassword } from '../helper/authhelper.js'
import usermodel from '../models/User.js'
import jwt from 'jsonwebtoken'

// Register Controllers 
export const registerController=async(req,res)=>{
    try {
        const {name,email,password,phone,address,answer}=req.body
        if(!name) return res.send({message:"name is require"})
        if(!email) return res.send({message:"email is require"})
        if(!password) return res.send({message:"password is require"})

        const existuser=await usermodel.findOne({email})

        if(existuser) return res.status(200).send({
            success:false,
            message:"Alredy Register please login"
        })

        const hashedpassword=await hashPassword (password)
        const user= await new usermodel({name,email,password:hashedpassword}).save()
        res.status(200).send({
            success:true,
            message:"User Rregister Succesfully",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"error in registration",
            error
        })
    }
}


//Login Controllers



//login
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Validate input
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "Invalid email or password"
            });
        }

        // Find user by email
        const user = await usermodel.findOne({ email });
        if (!user) {
            return res.status(401).send({
                success: false,
                message: "Email is not registered"
            });
        }

        // Compare password
        const match = await comparepassword(password, user.password);
        if (!match) {
            return res.status(401).send({
                success: false,
                message: "Invalid password"
            });
        }

        // Generate JWT token
        const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { 
            expiresIn: '7d' 
        });

        // Send success response
        res.status(200).send({
            success: true,
            message: "Login successfully",
            user: {
                name: user.name,
                email: user.email,
            },
            token
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false, // Fixed: was true, should be false for errors
            message: "Error in login",
            error
        });
    }
}
