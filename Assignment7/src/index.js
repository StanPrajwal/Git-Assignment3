const express = require('express')
const mongoose = require('mongoose');

const dotenv = require('dotenv').config();

const app = express()

const bodyParser = require("body-parser");
const port = 8080

const studentRouter = require("./router/students.js")

app.use(express.urlencoded());
app.use("/api/student",studentRouter)

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here

mongoose.connect(process.env.DATABASE_URL,()=>{
    console.log("Connected to Database Successfully")
})
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   