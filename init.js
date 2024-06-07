const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() =>{
    console.log("connection successfull");
  })
  .catch((err) =>{
    console.log(err);
  })

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}  

let allChats = [
    {
        from :"deepali",
        to : "ankit",
        msg : "where r u",
        created_at : new Date()
    },
    {
        from :"ankit",
        to : "bhav",
        msg : "hii i am there",
        created_at : new Date()
    },
    {
        from :"mitali",
        to : "meenal",
        msg : "i am fine",
        created_at : new Date()
    },
    {
        from :"priya",
        to : "radha",
        msg : "i'll meet u soon",
        created_at : new Date()
    }
];

Chat.insertMany(allChats);

