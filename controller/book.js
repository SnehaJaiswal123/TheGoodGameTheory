const Book=require('../model/book')

const postBook=async(req,res)=>{
    try{
        const newbook=new Book(req.body)
         await newbook.save()  
    }
    catch(e){
        res.status(500).send(e)
    }
}


const getAllBook=async(req,res)=>{
    try{
        const allBooks=await Book.find({})
        res.send(allBooks)
    }
    catch(e){
        res.status(500).send(e)
    }
     
}

const updateBook=async(req,res)=>{
    const allowedUpdates=["name","auther","publication","price"]
    const updates=Object.keys(req.body)
    const allowed=updates.every((updates)=>{
        return allowedUpdates.includes(updates)
    })
    if(!allowed){
        return res.status(400).send("Updates not allowed")
    }
    try{
        const updatedBook=await Book.findByIdAndUpdate({_id:req.params.id},{new:true,runValidators:true})
        res.send(updatedBook)
    }
    catch(e){
        res.status(400).send(e)
        console.log(e);
    }
}



const deletBook=async(req,res)=>{
    try{
        const mybook=await Book.findOneAndDelete({_id:req.params.id,owner:req.user._id})
        console.log(mybook);
        if(!mybook){
           return res.status(404).send("book not found")
        }
        res.send({message:"deleted","book":mybook})
    }
    catch(e){
        console.log(e);
        res.status(400).send(e)
    }
}

module.exports={
    deletBook,
    updateBook,
    getAllBook,
    postBook
}