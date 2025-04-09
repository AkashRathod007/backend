import dotenv from 'dotenv';
dotenv.config()
import mongoose from "mongoose";
import express from "express"
const app = express();
import { DB_NAME } from "./constant.js";

import connectDB from './db/index.js';

connectDB();





// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error" ,(error)=>{
//             console.log("ERROR" , error);
//             throw error
//         })
//         app.listen(process.env.PORT , ()=>{
//             console.log(`App is listening on the port ${process.env.PORT}`)
//         })
//     } catch(error){
//         console.log("mongodb connection error " , error)
//         throw error
//     }
// })()