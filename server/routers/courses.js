const express=require('express')
const { ObjectId } = require('mongodb')
require('../database/mongo')
const courserouter=new express.Router()
const Courses=require('../schema/courses')

courserouter.get("/courses",async(req,res)=>{
    if(req.query.course_id){
        try{
            const course=await Courses.find({_id:req.query.course_id});
            res.send(course);
        }
        catch(e){
            res.status(400).send("id mismatch");
        }
    }

    else{
        try{
            let courses=await Courses.find();
            if(courses.length>0){
                const course=courses.map((val)=>{
                    const course_name=val.coursename;
                    const course_instructor_name=val.course_instructor_name;
                    const course_description=val.course_description;
                    const course_id=val._id;
                    return {course_name,course_instructor_name,course_description,course_id};
                })
                res.status(200).send(course);
            }
            else if(courses.length==0){
                res.status(200).send([]);
            }
        }
        catch(e){
            res.status(402).send(e);
        }
    }
})

module.exports=courserouter