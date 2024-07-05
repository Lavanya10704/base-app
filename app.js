const express = require('express');

const app=express();
const port=5000;
const connectDb=require('./db/connect');
//require dotenv
require('dotenv').config();

//Middleware
app.use(express.json())


//connection
const start=async () =>{
    try{
        await connectDb(process.env.MONGO_CONNECT);
        app.listen(port, (req,res)=>{
            console.log('You are listening to port:',port);
        })
    } catch (error){
        console.log(error);
    }
}

start();