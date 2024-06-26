const express = require("express")
require('dotenv').config()
const colore = require("colors")
const connectDB = require("./config/db_config")
const app = express()
const PORT = process.env.PORT || 5000
const cors = require("cors")



app.use(cors());


// DB Connect

connectDB();

// Body-Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// root dir
app.get( '/', (req,res) => {
    res.json({
        message : " WELCOME TO  THE TOTO TREACKER  API",
    })
})

// todo routes
app.use('/api/todo' , require("./routes/todo/todoRoutes"))

// Server
app.listen(PORT,()=> {
    console.log(` Server is runing at  PORT : ${PORT} ` .bgGreen .white)
})





