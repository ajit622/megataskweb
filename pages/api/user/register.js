import connectDB from '@/pages/connectDb';
import mongoose from 'mongoose';
import User from '@/models/user';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export default async function POST(req, res) {
    try {
        await connectDB(); // Assuming connectDB is an asynchronous function

        if (req.method === 'POST') {
            const { name, email, phone, password } = req.body;
            if (!name || !email || !phone || !password) {
                res.status(400).json({ message: "Please fill all required fields" });
                return;
            }
            const emailExists = await User.findOne({ email });
            if (emailExists) {
              return res.status(400).json({ message: "User already Registered !" });
            }
            const isActive = 1;
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({
                name, 
                email, 
                isActive,
                phone,
                password: hashedPassword
              });
       
           
            const result = await newUser.save();
            const token = jwt.sign({ token: result._id }, "Ajit", {
              expiresIn: "30d",
            });
            return res
              .status(201)
              .json({ message: "Registered Succesfully !", token });
        }
    } catch (error) {
        console.error(error);
        mongoose.connection.close();
        res.status(500).json({ message: "Register Failed" });
    }
}
