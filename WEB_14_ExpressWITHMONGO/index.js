const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const ExpressError = require("./ExpressError.js");
//models requirement 
const Chat = require("./models/chat.js");

const methodOverride = require("method-override");
app.set("views" , path.join(__dirname , "views"));
app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname , "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
//aysnc Wrap function 

function aysncWrap(fn)
{
    return function(req , res , next )
    {
        fn(req , res , next ).catch(err=> next(err));
    };
}
main().then(()=>
{
    console.log("Database Connected ");
}).catch((err)=>{
    console.log("Eroor ",err);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
    
}
app.get("/" , (req , res)=>
{
    res.send("Yes Server is Connected ");
});


app.get("/chats" , async (req , res )=>{
    
    let chats = await Chat.find() ;
    console.log(chats);
    res.render("index.ejs" , {chats});
});
//new Route
app.get("/chats/new" , (req , res)=>
{
    throw new ExpressError(404 , "Page Not Found !!!");
    res.render("new.ejs");
});
//create Route 
app.post("/chats" , ( req , res )=>
{
    let {from , to , msg } = req.body;
    let newChat= new Chat( {
        from : from,
        to : to ,
        msg : msg ,
        created_at : new Date()

    });
    newChat.save().then((res)=>
    {
        console.log("Chat is Saved !!!" , res);
    }).catch((err)=>
    {
        console.log(err);
    });
    console.log(newChat);
    res.redirect("/chats");
});
////edit route 
app.get("/chats/:id/edit" ,aysncWrap( async (req, res , next)=>
{
   
    let {id}= req.params;

    let chat = await Chat.findById(id);
    if(!chat)
    {
     next(new ExpressError(403 , " Post is Found "));
    }
     res.render("edit.ejs" ,{chat});
 
}));
//update route 
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newmsg } = req.body;

    try {
        let updatedChat = await Chat.findByIdAndUpdate(
            id,
            { msg: newmsg },
            { runValidators: true, new: true }
        );
        console.log(updatedChat);
        res.redirect("/chats");
    } catch (err) {
        console.error("Update failed:", err);
        res.status(500).send("Something went wrong");
    }
});
//index Route
 
app.use((err , req , res , next )=>{

    let {status=404 , message="Some Error Occured"}= err;
    res.status(status).send(message); 

});

app.listen(3000 , ()=>
{
    console.log("Server is Live ");
});