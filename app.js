const express=require('express');
const bodyparser=require("body-parser");
const app=express();
const date=require(__dirname+"/date.js");
var fulldate=date.sachindate();

app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
var items=["Eating","playing","Coding"];
var worklist=[];

app.get("/",function(req,res){
res.render("list",{Tittle:fulldate,newlistitem:items});
});
app.post("/",function(req,res){
  var item=req.body.newitem;
  console.log(req.body);
  if(req.body.list==="Work"){
    worklist.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }
});
app.get("/work",function(req,res){
   res.render("list",{Tittle:"Work List",newlistitem:worklist});
});
app.post("/work",function(req,res){
   var item=req.body.newitem;
   worklist.push(item);
   res.redirect("/work");
});
app.listen(3000,function(){
  console.log("hello world!");
});
