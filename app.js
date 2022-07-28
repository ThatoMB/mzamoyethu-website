const express = require('express');
const app = express();
const port = 3000;
const ejs = require('ejs');


app.set('view engine' , 'ejs');

app.use(express.static("public"));

app.get("/" , function(req , res){
res.render("home");
});

app.get("/prices" , function(req , res){
res.render("prices");
});

app.listen(port , function(){
  console.log("You're tuned in port 3000");
});
