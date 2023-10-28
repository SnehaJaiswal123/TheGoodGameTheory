require('./db/mongoose')
const bookrouter=require('./router/book')

const express=require('express')
const app=express();

app.use(express.json())


app.use(bookrouter)

app.listen(2000,()=>{
    console.log("server is running");
})

