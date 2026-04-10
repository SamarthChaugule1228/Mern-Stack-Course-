const express = require("express");
const path = require("path");

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname , "public")));
app.set("view engine", "ejs");  // Enable EJS
app.set("views", path.join(__dirname, "views"));  // Correct path setup

app.get("/", (req, res) => {
    res.render("home");  // Make sure views/home.ejs exists
});
app.get("/rolldice", (req, res) => {
    //dice random 

    let diceans = Math.floor(Math.random() * 6)+1;
    res.render("rolldice.ejs" , {num:diceans} );  // Make sure views/home.ejs exists
});

app.get("/instagram/:username" , (req , res)=>
{
    let {username} = req.params;
  
    const instadata = require("./data.json");
    const data = instadata[username];
    if(data)
    {
        res.render("instagram.ejs" , { data});
    }
    else
    {
        res.render("error.ejs");
    }
});

app.listen(port, () => {
    console.log("Server running on port", port);
});
