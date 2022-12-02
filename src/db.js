const express=require('express');
const path=require('path');
const app=express();

const hbs=require('hbs');
var alert=require('alert');
require("./db/connect");
const Register =require("./models/registers");
const {json} = require("express");

const { default: userEvent } = require('@testing-library/user-event');
const port=process.env.PORT || 3000;

const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);

hbs.registerPartials(partials_path )
app.get("/",(req,res)=>{
    res.render('index');
});
app.get("/register",(req,res)=>{
  res.render("register");
});
//cretae new user in our database
app.post("/register",async(req,res)=>{
  try {

          const registerDance = new Register({
            firstname:req.body.firstname,
            lastname:req.body.lastname, 
            Email:req.body.Email,
            Age:req.body.Age,
            Phone_Number:req.body.Phone_Number,
            Gender:req.body.Gender,
            Dance_form:req.body.Dance_form
          })
          const registered= await registerDance.save();
          alert('Registeration successfull');
          res.status(201).render("index");
          
}
 
  
  catch(error)
  {
    
    alert('you have already registered with this email');
    
  }
});
app.get("/index",(req,res)=>{
  res.render("index");
});
app.listen(port,()=>{
  console.log(`server is running ${port}`);
})