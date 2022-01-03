const express=require('express')
require('../database/mongo')
const emailrouter=new express.Router()
const User=require('../schema/users');

const nodemailer=require('nodemailer')
const { google }=require('googleapis')


const CLIENT_ID='827040839572-52lgnsq11u3ch9r76tj25tggddtdkgtk.apps.googleusercontent.com'
const CLIENT_SECRET='aWMBVDdc9IEEQb6-_XALpaoz'
const REDIRECT_URI='https://developers.google.com/oauthplayground'
const REFRESH_TOKEN='1//04EhVS-jA9VcNCgYIARAAGAQSNwF-L9IriZCTZ0LvnsISRX7h1-Z7IM9q3stra0iSkoOnz7Jm3vyIkK6eJrO1cE-_43wjNpU9jbA'
const oAuth2Client=new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)

oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})

emailrouter.get("/taken",async(req,res)=>{
      const _id=req.body._id;
      const user=await User.findOne({_id});
      const accessToken=oAuth2Client.getAccessToken()

      let transport = nodemailer.createTransport({
          service: 'gmail',
         auth: {
          type:'OAuth2',
         user: 'fabromall.e.tex@gmail.com',
         clientId:CLIENT_ID,
         clientSecret:CLIENT_SECRET,
         refreshToken:REFRESH_TOKEN,
         accessToken:accessToken
      }
      });
      
      let mailOptions = {
        from: ' fabroMall<fabromall.e.tex@gmail.com>',
        to: user.email,
        subject: 'Congrats on taking the course',
         text: `Enjoy the course`
      };

           transport.sendMail(mailOptions, function(err, data) {
          if(err) 
          {
             console.log(err);
        } else 
          {
            console.log('Email sent successfully');
          }
         })
    res.send("otp sent to user")    
})

module.exports=emailrouter