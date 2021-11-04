import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoutes.js"
import dataService from "./data/userService.js"

let password = "fOfHBgvczOTnRJoC";
let name = "ddKamatera";
const uri = "mongodb+srv://"+name+":"+password+"@db1.jijvj.mongodb.net/pooltrack";
let client = await mongoose.connect(uri);

const app = express()
dataService.connect();

app.use(express.json())

app.use("/api",userRouter);

app.listen(5000,()=>{
    console.log("Server has started");
})