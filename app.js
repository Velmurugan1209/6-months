const express = require('express');
const sequelize = require('sequelize')
const app = express();
const route = require('./route/route');
require('dotenv').config();
const port = 3000 ;


app.use(express.json());
app.use('/api', route)

app.listen(port , ()=>{
    console.log("Its Server is work");
    
})





