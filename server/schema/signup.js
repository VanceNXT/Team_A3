const mongoose=require('mongoose')
const schema=mongoose.Schema
const validator=require('validator')

const userschema=new schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email Invalid")
            }
        }
    },
    qualification:{
        type:String
    },
    course:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
    },
    country:{
        type:String
    },
    state:{
        type:String
    },
    addressline1:{
        type:String
    },
    addressline2:{
        type:String
    },
    pin:{
        type:Number
    },
    startdate:{
        type:String
    },
    enddate:{
        type:String
    },
    duration:{
        type:Number
    },
    hours:{
        type:Number
    },
    goals:{
        type:String
    },
    objective:{
        type:String
    },
    topicstocover:{
        type:String
    },
    prereq:{
        type:String
    },
    termsandcondition:{
        type:String
    }
})

const mong=mongoose.model('trainlog',userschema)

module.exports=mong
