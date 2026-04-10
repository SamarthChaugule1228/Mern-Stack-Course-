const mongoose = require("mongoose");
// basic schema of chat 
const chatSchema = new mongoose.Schema({
    from : {
        type : String ,
        required : true 
    } , 
    to :{
        type : String ,
         required : true 
    },
    msg :{
        type : String ,
        maxLength : 50 
    } ,
    created_at:{
        type : Date ,
         required : true 
    }
});
//actual model of the chat 
const Chat = mongoose.model("Chat" , chatSchema);

module.exports = Chat;