const { faker, da } = require('@faker-js/faker');
//here we get the client 
const sql = require("mysql2");
const express = require("express");

const app = express();
const path = require("path");
// creating the conection with the database 
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "/views"));

const connection = sql.createConnection({
     host:'localhost' , 
     user : 'root',
     database: 'demo' ,
     password: 'root'
});
// try{
//       connection.query(q1,   ( err , result)=>
//       {
//         if(err)
//         {
//           throw err;
//         }
//         console.log(result);
//       });
// }
// catch(err){
//    console.log(err);
// }
// //to close the connection 
// connection.end();

let getRandomUser= () => {
  return [
     faker.string.uuid(),
     faker.internet.username(), // before version 9.1.0, use userName()
     faker.internet.email(),
     faker.internet.password(),
  ];
};
 //Route for the home page 
app.get("/" , (req , res)=>
{
  let q = "select count(*) from user";
  
 try {

   connection.query(  q  ,(  err, result )=>
  {
    let count = result[0]["count(*)"];;
    if(err)
    {
      throw err;
    }

      console.log(result);
      res.render("home.ejs" ,{count});
   
  } );
 }
 catch(err)
 {
   res.send("Unexpected Error !!!");
 }
});
//route for the show user 
app.get("/users" , (req , res)=>{
  let q = "select * from user ";

  try{
       connection.query(q , (err , users)=>
      {
        if(err)
        {
          throw err;
        }
        res.render("showusers.ejs" , {users});

       });
  }
  catch(err){
    res.send("Unable to fetch the data !!!");
  }
});


 app.listen("3000" , ()=>
{
  console.log("Server is REsponssing Wait yaer");
});

//  try {

//    connection.query(  q , [data] ,(  err, result )=>
//   {
//     if(err)
//     {
//       throw err;
//     }

//       console.log(result);
   
//   } );
//  }
//  catch(err)
//  {
//    console.log(err);
//  }

//  connection.end();
