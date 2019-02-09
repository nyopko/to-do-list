// Routes
// =============================================================

var db = require("../models");


module.exports = function (app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function (req, res) {
    db.item.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/todos", function (req, res) {
    db.item.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function (results) {
      res.json(results);
    });
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete("/api/todos/:id", function (req, res) {

    db.item.destroy({
      where: {
        id: req.params.id
      }
    }).then(function () {
      res.end();
    });
  });


  // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/api/todos", function (req, res) {
    // orm.editTodo(req.body, function(results) {
    //   res.json(results);
    // });
  });
};
