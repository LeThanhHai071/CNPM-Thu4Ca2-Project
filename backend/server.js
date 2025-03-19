import express from 'express'
import dotenv from "dotenv"



const port = process.env.PORT || 3000;

const cors = require("cors");
app.use(cors());

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.send("API is running")
})


app.listen(port, () => console.log(`Server is running on port ${port}`))