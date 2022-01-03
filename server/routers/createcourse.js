const express=require('express')
require('../database/mongo')
const create_courserouter=new express.Router()
const Courses=require('../schema/courses')

create_courserouter.post("/create_course",async(req,res)=>{
//     const {coursename,
//     course_duration,
//     course_instructor_name,
//     course_batches,
//     course_syllabus,
//     course_timing,
//     course_level,
//     course_prerequistic,
//     course_learning,
//     course_info,
//     course_benefits,
//     course_instructor_info,
//     course_instructor_experience,
//     course_review,
//    course_rating,
//     total_videos,
//     course_description}=req.body;

    const course=new Courses(req.body);
    try{
        course.save().then(()=>{
            res.status(200).send("inserted");
        })
    } 
    catch(e){
        res.status(402).send(e);
    }
})

module.exports=create_courserouter