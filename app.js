const express = require('express');
const path = require('path');
const app = express();
require('dotenv').load();
app.set('view engine', 'pug');
app.use(express.static(`${__dirname}/public`));  

app.get("/", (req, res) => {
    res.render("includes/header.pug") 
});

app.get("/maps", (req, res) => {
    res.render("maps.pug", {key: process.env.KEY}) 
});

app.get("/youtube", (req, res) => {
    res.render("youtube.pug", {key: process.env.KEY}) 
});

app.listen(8080);