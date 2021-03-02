
//             Importing
//require('dotenv').config()
import express from 'express';
import http from 'http';
import bodyparser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
//const port = process.env.PORT||5000;


//             app config
const app=express();
const server = http.createServer((req,res) =>{
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain');
    res.end('Hello world');
});
//             Middleware
app.use(bodyparser.json({limit:"30mb", extended: true}));
app.use(bodyparser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());


//             DB config / listening
const CONN_URL = 'mongodb+srv://huzaifa:huzaifa12345@cluster0.gracy.mongodb.net/ChatLNKdb?retryWrites=true&w=majority';
mongoose.connect(CONN_URL, {useNewUrlParser: true, useUnifiedTopology: true }).then
(()=>server.listen(5000,()=> console.log(`Server running on port: ${5000}`))).catch(console.error());
mongoose.set('useFindAndModify',false);