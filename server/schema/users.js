const mongoose=require('mongoose')
const schema=mongoose.Schema
const validator=require('validator')

const userschema=new schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    place:{
        type:String
    }    
})

const mong=mongoose.model('users',userschema)

module.exports=mong
