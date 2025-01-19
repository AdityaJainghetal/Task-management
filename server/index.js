const express = require("express")
const app = express()
const mongoose= require("mongoose");
const bodyparser = require('body-parser')
const cors = require('cors');
const adminRoute= require("./routes/adminRoute");

require('dotenv').config();
app.use(cors());
mongoose.connect(process.env.DBCON).then(()=>{
    console.log("DB connected!!!");
})
let PORT = process.env.port || 8000
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/admin", adminRoute);











app.listen(PORT, function (error) {
    if (error) throw error
    console.log("Server created Successfully on PORT: ", PORT)
})