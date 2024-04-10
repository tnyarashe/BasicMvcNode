const express = require("express")
require('dotenv').config()
const cors = require("cors")
const cors = express()
const initRoutes = require("./routes/user.routes")
const PORT = process.env.PORT

const DB =  require("./config/db.config")
const db = require('./models')
const { appendFile } = require("fs")

//var corsOptions = {
//    origin: "http://localhost:8081"
//}

//app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({extended: true, limit: '50mb'}))

db.mongoose.connect(DB.db_url, {
    userNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(console.log("Connected successfully"))
    .catch(err=>{console.log("Error message : " + EvalError)})

initRoutes(app)

app.listen(PORT, ()=> {
    console.log(`Server is running @ port ${PORT}.`)
})

