const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app')

dotenv.config({ path: './config.env' });

const DB = process.env.MONGODB_URI.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
  );
mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('DB connection successful!');
    });


const port = process.env.PORT || 3000;
const server = app.listen(port,()=>{
    console.log(`Server runs on ${port} PORT`)
})