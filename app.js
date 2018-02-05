var express = require("express");
var path = require("path");
var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){

  var recipe = [
    {
      image:"turkishpizza.jpg",
      name: "Turkish Pizza",
      prepTime: "30",
      cuisine: "Turkish"
    },
    {
      name: "Inari",
      prepTime: "34",
      cuisine: "Japanese"
    },
    {
      name: "Lasagne",
      prepTime: "60",
      cuisine: "Italian"
    },
    {
      name: "Pasta",
      prepTime: "30mins",
      cuisine: "Italian"
    },
    {
      name: "Pasta",
      prepTime: "30mins",
      cuisine: "Italian"
    },

  ]

  res.render('explore', {
    recipe: recipe
  });
});

app.get('/', function(req, res){

  var recipe2 = [
    {
      name: "Turkish Pizza",
      prepTime: "30",
      cuisine: "Turkish"
    },
    {
      name: "Inari",
      prepTime: "34",
      cuisine: "Japanese"
    },
    {
      name: "Lasagne",
      prepTime: "60",
      cuisine: "Italian"
    },
    {
      name: "Pasta",
      prepTime: "30mins",
      cuisine: "Italian"
    },
    {
      name: "Pasta",
      prepTime: "30mins",
      cuisine: "Italian"
    },

  ]

  res.render('categories', {
    recipe2: recipe2
  });
});

app.get("/add", function(req, res){
  res.render('add');
});

app.get("/detail", function(req, res){
  res.render('detail');
});

// app.get("/categories", function(req, res){
//   res.render('categories');
// });

app.post("/add/submit", function(req, res){
  res.send("yay")
});


app.listen(4000, function(){
  console.log("Server is running");
});

