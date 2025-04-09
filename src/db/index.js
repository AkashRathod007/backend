import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDB = async ()=>{
    try {
         const connectionInsatnce = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
         console.log(`\n MongoDB connected !! DB Host : ${connectionInsatnce.connection.host} `)
    } catch (error) {
        console.log("MongoDB connection error " , error )
        process.exit(1);
        
    }
}

export default connectDB