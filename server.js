const express = require('express')
const dotenv = require('dotenv')
const app = require('./app')

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 3000;
const server = app.listen(port,()=>{
    console.log(`Server runs on ${port}`)
})