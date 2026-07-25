const express = require('express')
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes.js');

const app = express()
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/nextjs-course').then(()=>{
    console.log('connected to db')
}).catch((err)=>{
    console.log(err)
})

app.use(authRoutes);




app.listen(3000,()=>{
    console.log('server running')
})