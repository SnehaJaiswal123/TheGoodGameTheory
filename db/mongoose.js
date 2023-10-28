const mongoose=require('mongoose');
let url=process.env.Mongo_url;
mongoose.connect(url)   
.then((db)=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log(err)
})



module.exports=mongoose;