var Recipe = require("../models/recipeModels");

var recipeController = {

  getExplore: function(req, res){
    Recipe.find(function(err, recipes){
      if (err){return res.status(500).send("Error!")};

      res.render("explore", {
        recipes:recipes
      });
    })
  },

  getDetail: function(req, res){
    Recipe.findById(req.params.id, function(err, recipe){
      if (err){return res.status(500).send("Error!")};

      res.render("detail", {
        recipe:recipe
      });
    })
  },

  getCategories: function(req, res){
    Recipe.find(function(err, recipes){
      if (err){return res.status(500).send("Error!")};

      res.render("categories", {
        recipes:recipes
      });
    })
  },

  getNew: function(req, res){
    res.render('add', {status: false});
  },

  // Handle a form submission and save to DB
  postNew: function(req, res){
    // Create a new object from the model...
    var newRecipe = new Recipe(req.body);
    // ...and save it to the DB
    newRecipe.save(function(err, newRecipe){
      if(err){ return res.status(500).render('add', {status: 'error'}); };
      res.status(201).render('add', {status: 'success'});
    });
  },

  delete: function(req, res){
    // Find a single document from the DB by the URL ID parameter...
    Recipe.findById(req.params.id, function(err, book){
      if(err){ return res.status(500).send('Error!') };
      // ...and delete it
      Recipe.remove();
      // Now render the list
      Recipe.find(function(err, books){
        if(err){ return res.status(500).send('Error!') };
        res.render('detail', {
          recipes: recipes
        });
      })
    })
  }

};



module.exports = recipeController;