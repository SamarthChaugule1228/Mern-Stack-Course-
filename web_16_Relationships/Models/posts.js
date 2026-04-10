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
    email : String,
});

const postScehma = new Schema({
    // title : String ,
    content : String ,
    likes : Number ,
    
    user : {type: Schema.Types.ObjectId , 
        ref : "User"
    }
});
const User = mongoose.model("User" , userSchema);
const Post = mongoose.model("Post" , postScehma);   

const addData = async()=> {
    let user1 = await User.findOne({ username: "Samarth " });
    let post1 = new Post({
        content : "This is my third  post " ,
        likes : 400 ,   
    });
    post1.user = user1 ;
    await user1.save() ;
    await post1.save() ;
    console.log(post1);
}
const showData = async()=> {
    let result = await Post.find().populate("user") ;   
    console.log(result[0]);
};
showData() ;
// addData() ;

