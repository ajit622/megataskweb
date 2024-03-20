import mongoose from "mongoose";
import connectDB from "@/pages/connectDb";
import User from "@/models/user";
import Router from "next/router";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const {email, password}  = req.body;
            return res.status(400).json({message:req}); 
            if(!email || !password) {
                return res.status(400).json({message:"Please Enter Required Fields "});
            } 
      
            const emailExists = await User.findOne({email});
       
            if (!emailExists) {
                return res.status(400).json({ msg: "Please Register first !" });
            }
          
            const passwordMatched = await bcrypt.compare(
                password,
                emailExists.password
              );
              return res.status(400).json({ msg: passwordMatched });
              if (passwordMatched) {
                const token = jwt.sign({ token: emailExists._id }, process.env.JWT_SECRET, {
                  expiresIn: "30d",
                });
                return res.status(200).json({ message: "Logged in successfully !", token });
              }
              return res.status(400).json({ message: "Invalid Credentitials !" });
        } catch (error) {
            return res.status(400).json({ message: error });  
        }
    }
    
};
