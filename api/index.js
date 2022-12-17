import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from './routes/auth.js'
import usersRouter from './routes/users.js'
import hotelsRouter from './routes/hotel.js'
import roomsRouter from './routes/rooms.js'

const app = express()
dotenv.config
mongoose.set("strictQuery", false); //for error when start node js

const url = 'mongodb+srv://bulat:123@cluster0.a9fgj0p.mongodb.net/?retryWrites=true&w=majority'
const connect = async () => {

    try {
    //   await mongoose.connect(process.env.MONGO); (CANT CONNECT !)
    await mongoose.connect(url);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error
    }
  };

  //middleware

  app.use(express.json()); // to convert file CRUD happen

  app.use("/api/auth" , authRouter)
  app.use("/api/users" , usersRouter)
  app.use("/api/hotels" , hotelsRouter)
  app.use("/api/rooms" , roomsRouter)


app.listen( 8000 , ()=>{
    connect()
    console.log('Connected to backend...')
})