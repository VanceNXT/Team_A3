const express=require('express')
require('../database/mongo')
const signuprouter=new express.Router()
const User=require('../schema/signup')

signuprouter.post("/trainersignup",async(req,res)=>{

    const {firstname,lastname,email,qualification,course,contact}=req.body
    const {country,state,addressline1,addressline2,pin}=req.body

    const {startdate,enddate,duration,hours,goals,objective}=req.body
    const {topicstocover,prereq,termsandcondition}=req.body

    const trainer=new User({
        firstname,lastname,email,qualification,course,contact,
        country,state,addressline1,addressline2,pin,
        startdate,enddate,duration,hours,goals,objective,
        topicstocover,prereq,termsandcondition
    })
    try{
        await trainer.save().then(()=>{
            res.status(200).send("Saved")
        })
    }
    catch(error){
        return res.status(400).send(error);
    }
})

module.exports=signuprouter