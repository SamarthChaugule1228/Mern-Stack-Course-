const express = require("express");

const app = express();
let port = 3000;

// Optional: Log incoming requests
// app.use((req, res, next) => {
//     console.log("Request received: ", req.method, req.url);
//     next();
// });
app.listen(port, () => {
    console.log("Server are to is Starting on port", port);
});

// // Route 1
// app.get("/apple", (req, res) => {
//     res.send("Apple is delivered Successfullyy !!!");
// });

// // Route 2
// app.get("/orange", (req, res) => {
//     res.send("orange is delivered Successfullyy !!!");
// });

// // Route 3
// app.get("/santra", (req, res) => {
//     res.send("santra is delivered Successfullyy !!!");
// });

// // Fallback route (for any other URL)
// app.use((req, res) => {
//     res.send("Currently item is not available, thank you !!!");
// });

// sending the response as a custom --> through the path parameter 

// app.get("/:username/:id" ,(req , res)=>
    // {
//     let {username , id} = req.params;
//     res.send(`Hello , @${username}`);
// });

// sending the response as a custom --> through the Query 
app.get("/search" , (req, res)=>{
    let {q} = req.query;
    res.send(`Result for : ${q}`);
});