const mongoose = require("mongoose");
const {Schema} = mongoose;
main()
.then(()=> console.log("Connection Successfully "))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema = new Schema({
    username : String,
    addresses:[
        {
            location : String ,
            city : String 
        }, 
        {
            location: String ,
            city : String 
        }
    ]
});
const User = mongoose.model("User" , userSchema);

const  addUsers =  async()=> {
    let user1 = new User({
        username : "Samarth " ,
        addresses :[
            {
                location: "413305 Solapur MH-13" ,
                city : "Zero Dero"
            }
        ]
    });

    user1.addresses.push({location :"413400 pandharpur Mh" , city : "Empty"});
   let result =  await user1.save() ; 
   console.log("Resutl : ", result); 
}
addUsers() ; 
