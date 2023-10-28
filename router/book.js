const express=require('express');
const controller=require('../controller/book')
const router=express.Router();

router.get('/getAllBook',controller.getAllBook)
router.post('/postBook',controller.postBook)
router.put('/updateBook',controller.updateBook)
router.delete('/deleteBook',controller.deletBook)


module.exports=router;