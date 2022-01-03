const mongoose=require('mongoose');
const schema=mongoose.Schema;

const courseschema=new schema({
    coursename:{
        type:String,
        required:true
    },
    course_duration:{
        type:Number
    },
    course_instructor_name:{
        type:String,
    },
    course_batches:{
        type:String
    },
    course_syllabus:{
        type:String
    },
    course_timing:{
        type:Number
    },
    course_level:{
        type:String
    },
    course_prerequistic:{
        type:String
    },
    course_learning:{
        type:String
    },
    course_info:{
        type:String
    },
    course_benefits:{
        type:String
    },
    course_instructor_info:{
        type:String
    },
    course_instructor_experience:{
        type:String
    },
    course_review:{
        type:String
    },
    course_rating:{
        type:Number
    },
    total_videos:{
        type:Number
    },
    course_description:{
        type:String
    }
})

const mong=mongoose.model('courses',courseschema);

module.exports=mong
