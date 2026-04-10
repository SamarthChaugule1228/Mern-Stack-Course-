const mongoose = require("mongoose");

async function main()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

main().then(()=>
{
    console.log("Connection Successffully !!!!!"); 
}).catch((err)=>
{
    console.log(err);
});

const bookSchema  = new mongoose.Schema({
    title :{
        type : String ,
        required : [true ,  "title field is Required !!!!"] 
    },
    author : {
        type : String
    }, 
    price : {
        type : Number
    }

});
//creating model 
const Book = mongoose.model("Book" , bookSchema);

//creating Document 1 

let book3 = new Book({
    author : "Rd Sharma" ,
    price : 100
});

book3.save().then((res)=>
{
    console.log(res);
}).catch((err)=>
{
    console.log(err.errors.title.message);
});



