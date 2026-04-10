const express = require("express");
const app = express();

const port = 3000 ;
const path = require("path");
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));
app.use( express.static(path.join(__dirname , "public")));
app.use(express.urlencoded({extended : true}));//to understand to post data 
//generating unique ids 
const{v4:uuidv4} = require('uuid');

// database ofr posts 
const methodOverride = require("method-override");
let posts =[
    {
        id :uuidv4(),
        username : "samarth" ,
        content : "this is the demo post"
    },
    {
        id :uuidv4(),
        username : "Ram" ,
        content : "this is the demo post2"
    },
    {
        id :uuidv4(),
        username : "tom" ,
        content : "this is the demo post3"
    },
    {
        id :uuidv4(),
        username : "elon" ,
        content : "this is the demo post4"
    }

];
app.use(methodOverride("_method"));
//crating the first route 
app.get("/posts" , (req , res)=>
{
    // console.log("Server is Now Working !!!");
    // res.send("Server is Now Working !!!");
    //render to the index .ejs 

    res.render("index.ejs" , {posts});
})

app.get("/posts/newpost" , (req , res )=>
{
    res.render("post.ejs");
});

app.post("/post" , (req  , res )=>
{
    let {username , content} = req.body;
    // console.log()
    let id = uuidv4();
    posts.push({id, username , content});
    // posts.push(id);
    // res.send("Your response is recieved ");
    res.redirect("/posts");
});
//updating the post --> through the patch request 
app.patch("/posts/:id" , (req , res)=>
{
    let newcontent = req.body.content;
    let{id}= req.params;
    let post = posts.find((p)=> id === p.id );
    post.content = newcontent;
    console.log(post);
    res.redirect("/posts");
});
app.delete("/posts/:id", (req, res) => {
    const { id } = req.params;

    // Filter out the post with matching id
   for (let i = 0; i < posts.length; i++) {
  if (posts[i].id === id) {
    posts.splice(i, 1); // remove 1 element at index i
    break; // stop loop after deleting
  }
}

    res.redirect("/posts"); // or send JSON if using fetch
});

//creating api --> route 
app.get("/posts/:id" ,(req , res )=>
{
    let {id} = req.params;
    let post = posts.find((p)=> id == p.id);
    res.render("shows.ejs" , {post});
});
//creating route for the Editing the post

app.get("/posts/:id/edit" , (req , res)=>
{
    let {id} = req.params;
    console.log(id);
    let post = posts.find((p)=> id == p.id);
    console.log(post);
    res.render("edit.ejs" ,{post} );
});
//deleting the post

app.listen(port , ()=>
{
    console.log("Server is Active now !!!!");
});