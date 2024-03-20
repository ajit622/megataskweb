import mongoose from "mongoose";

const URL  = "mongodb+srv://ajitmegatask:8BmbOxgkEBIyXtMO@cluster0.poyadb1.mongodb.net/ajit";

 const connectDB = async () =>{
    try {
        const conn = await mongoose.connect("mongodb+srv://ajitmegatask:8BmbOxgkEBIyXtMO@cluster0.poyadb1.mongodb.net/ajit", {
          useNewUrlParser: true,
        });
        console.log("MongoDB Connected: {conn.connection.host}");
      } catch (error) {
        console.error(error.message);

      }
}   
export default connectDB;