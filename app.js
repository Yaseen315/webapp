var express = require("express");
var path = require("path");
var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
  res.render('explore');
});

app.get("/add", function(req, res){
  res.render('add');
});

app.get("/detail", function(req, res){
  res.render('detail');
});

app.get("/categories", function(req, res){
  res.render('categories');
});

app.post("/add/submit", function(req, res){
  res.send("yay")
});


app.listen(4000, function(){
  console.log("Server is running");
});
