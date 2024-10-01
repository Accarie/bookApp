//importing packages
const express= require("express");
const mysql=require('mysql');
const doenv= require('dotenv');
const path=require('path');
const hbs= require('hbs');
const mongoose= require('mongoose');
const app= express();

doenv.config({
    path:'./.env',
});
//creating database connection
const db= mysql.createConncection({
    host:'localhost',
    user:'root',
    password:'',
    database:'work'
})
db.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Mysql connection successfull')
    }
});
const location=path.join(__dirname, "./public");
app.use(express.static(location));
//seting the view engine which is hbs you can also use ejs depending on your choice
app.set('view engine','hbs');
//welcoming message on the page
const partialsPath=path.join(__dirname,'/views/partials');
hbs.registerPartials(partialsPath);
app.get('/',(req,res)=>{
   //res.send('<h1>welcome to the app</h1>')
   res.render("index");
});
app.get('/register',(req,res)=>{
    res.render("register")
})
app.get('/home',(req,res)=>{
    res.render("home")
})
//settign the port number on which the program is running on
app.listen(5000,()=>{
    console.log("server is runnig @ port 5000")
}); 