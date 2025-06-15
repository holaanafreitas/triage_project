import express from "express";

//info of connection import
import {PORT, DOMAIN} from './config/config.js'

// we start our web server
const app = express();

//  method to et he homepage
app.get("/", (req, res) => {
    res.setHeader('Content-Type', "text/html");
    res.send("Hi, you requested home")
});

app.get("/contacto", (req,res) => {
    res.setHeader('Content-Type', "text/html");
})

app.listen(PORT, () => {
    console.log(`Server running at ${DOMAIN}:${PORT}`)
});