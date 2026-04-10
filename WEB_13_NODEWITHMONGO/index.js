const mongoose = require('mongoose');
main().then((res=>
{
    console.log("Connection Established Successfully !!!");
}
)).catch((err)=>{
        console.log(err);
});


async function main()
{
     await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

// its just schema of the collection 

const userSchema = new mongoose.Schema({
name : String , 
email : String ,
age : Number
});
const User = new mongoose.model("User" , userSchema);
const Employeee = new mongoose.model("Employee" , userSchema);

// const user1 = new User({
//     name :"samarth",
//     email : "sam@gmail.com" ,
//     age : 34
// });
// user1.save().then((res)=>
// {
//     console.log(res) ;
// }).catch((err)=>
// {
//     console.log("Error !!");
// });

// User.insertMany([
//     {name: "ram" , email: "ram@gmail.com" , age : 55} ,
//     { name : "shyam" , email: "shyam@gmail.com" , age : 45},
//     { name : "Tommy" , email:"Tommy@gmail.com" , age : 65}
// ]).then((res)=>
// {
//     console.log(res);
// }).catch((err)=>
// {
//     console.log(err);
// });

// fnding the data 
User.find({}).then((res)=>
{
    console.log("Result : ", res);
});

// User.find({name:"ram"}).then((res)=>
// {
//     console.log("Ram is Found : ", res);
// });
// //finding by id 
// User.findById("6888baead6c7ced512e01435").then((res)=>
// {
//     console.log("By id : ",res);
// }).catch((err)=>
// {
//     console.log(err);
// });
// updating the document 


// User.updateOne({name: "ram"} , {name : "Tommay3"}).then((res)=>
// {
//     console.log("Updated Successfully : " , res);
// }).catch((err)=>
// {
//     console.log(err);
// });
// deleting the document form databse 

User.deleteMany({name : "Tommy"}).then((res)=>
{
    console.log(res);
}).catch((err)=>
{
    console.log(err);
});

