const express=require('express')
require('../database/mongo')
const createuserrouter=new express.Router()
const User=require('../schema/users');

createuserrouter.post("/adduser",async(req,res)=>{
    const user=new User(req.body);
    user.save().then(()=>{
        res.send("saved");
    })

})

module.exports=createuserrouter