import express from 'express'
import mongoose from  'mongoose';
import dotenv from "dotenv"
// import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
// import cors from 'cors'

dotenv.config();


//db connection
mongoose
    .connect(process.env.URI)
    .then(()=>{
    console.log("connected to db");
    })
    .catch((err)=>{
    console.log(`error in db connection ${err}`);
    })


const app = express()

app.use(express.json())
// app.use(cors())  if we are deploying both front and backend on the same server so put proxy in vite config

// app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)

//the below middleware used for error is used for e.g is signup next
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server error'
    return res.status(statusCode).json({
        success:false,
        message,       //error:message
        statusCode   // statusCode:statusCode  as same name in es6 can be removed
    })
})



app.listen(4000,()=>{
    console.log("Server running on port 4000!!!");
})