const mongoose = require("mongoose");
//models requirement 
const Chat = require("./models/chat.js");

main().then(()=>
{
    console.log("Database Connected ");
}).catch((err)=>{
    console.log("Eroor ",err);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
    
}

//created Document 1 --> records 1 
let chats = 
[
     {
        from: "Sam" ,
        to : "rututja" ,
        msg : "Send me Document Fast Fast ",
        created_at: new Date()
    },
     {
        from: "tom" ,
        to : "low" ,
        msg : "Send me Document  os Fast ",
        created_at: new Date()
    },
     {
        from: "cmmo" ,
        to : "lame" ,
        msg : "Syou fdgd ",
        created_at: new Date()
    },
     {
        from: "tomm u" ,
        to : "lomu" ,
        msg : "ya ll rig t ",
        created_at: new Date()
    },
     {
        from: "king" ,
        to : "quuen" ,
        msg : "i you ",
        created_at: new Date()
    },
     {
        from: "vk" ,
        to : "dh" ,
        msg : "Send me Monry Fast Fast ",
        created_at: new Date()
    },
     {
        from: "mukesh" ,
        to : "elon" ,
        msg : "Send me MOney  Fast Fast ",
        created_at: new Date()
    }
];
Chat.insertMany(chats);

