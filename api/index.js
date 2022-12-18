import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from './routes/auth.js'
import usersRouter from './routes/users.js'
import hotelsRouter from './routes/hotel.js'
import roomsRouter from './routes/rooms.js'
import cookieParser from "cookie-parser";

const app = express()
dotenv.config()
mongoose.set("strictQuery", false); //for error when start node js

const url = 'mongodb+srv://bulat:123@cluster0.a9fgj0p.mongodb.net/?retryWrites=true&w=majority'
const connect = async () => {

    try {
    await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error
    }
  };

  //middleware
  app.use(cookieParser())
  app.use(express.json()); // to convert file when CRUD happen

  app.use("/api/auth" , authRouter)
  app.use("/api/users" , usersRouter)
  app.use("/api/hotels" , hotelsRouter)
  app.use("/api/rooms" , roomsRouter)

  //everytime error occur it will trigger next(err) and lead 
  //to next middleware to hadle error handler

  app.use((err,req,res,next)=>{   //err are from any router that had error and err came from mongoDB itself
    const errorStatus= err.status || 500
    const errorMessage = err.message || "Something goes wrong"
    return res.status(errorStatus).json(errorMessage)
  })

  //to start the node js
app.listen( 8000 , ()=>{
    connect()
    console.log('Connected to backend...')
})