var express = require("express");
var path = require("path");
var app = express();
var mongoose = require("mongoose")
var bodyParser = require('body-parser');

var recipeController = require("./controllers/recipeController");


var mongoUrl = process.env.MONGODB_URI;
mongoose.connect(mongoUrl, function(err){
  if(err) return console.log(err);
  console.log("DB connection open!");
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", recipeController.getExplore)

app.get("/detail/:id", recipeController.getDetail)

app.get("/add", recipeController.getNew)

// app.get("/detail", function(req, res){
//   res.render('detail');
// });

app.get("/categories", recipeController.getCategories)

app.post("/add/submit", recipeController.postNew)
app.post('/detail/:id/delete', recipeController.delete)


app.listen(process.env.PORT || 4000);
  console.log("Server is running");
});

module.exports = app;