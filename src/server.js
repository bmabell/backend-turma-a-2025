//const express = require('express');
import express from 'express';
const server = express();

import routerPayment from './routes/payment.routes.js';

server.use(express.json());
server.use("/api",routerPayment);
const PORT = process.env.PORT || 3000;

server.get("/",(req,res)=>{
    res.send("Mabell a mais mais no GET!!!" + new Date());
});

server.post("/",(req,res)=>{
    res.send("Mabell a mais mais no POST!!!" + new Date());
});

server.patch("/",(req,res)=>{
    res.send("Mabell a mais mais no PATCH!!!" + new Date());
});

server.delete("/",(req,res)=>{
    res.send("Mabell a mais mais DELETE!!!" + new Date());
});

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});