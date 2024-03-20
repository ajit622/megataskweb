import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please provide your name.'],
        trim:true,
        maxlength: [60, 'Name cannot be more than 60 characters']
    },email:{
        type:String,
        required:[true, 'Please provide your Email.'],
        trim:true,
        maxlength: [60, 'Name cannot be more than 60 characters'],
        unique:true
    },phone:{
        type:Number,
        maxlength: [15, 'Name cannot be more than 60 characters'],
        required:[true, 'Please provide your phone'],
    },isActive:{
        type:Number,
        default:0,
    },
    password:{
        type:String,
        maxlength: [60, 'Name cannot be more than 60 characters'],
        required:[true, 'Please Enter Password'],
    }
},{timeseries:true});

export default mongoose.models?.User || mongoose.model("User",UserSchema);
