const express=require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/signupmodels')

router.post('/signup',(request,response)=>{
    const signedUpUser=new signUpTemplateCopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        Occassion:request.body.Occassion,
        Age:request.body.Age,
        password:request.body.password,
        Phone_Number:request.body.Phone_Number,
        Gender:request.body.Gender
    }) 
    signedUpUser.save()
    .then(data=>{
        console.log("Log in")
        response.json(data)
    })
    .catch(error=>{
        console.log("err")

        response.json(error)
    })

})

module.exports = router