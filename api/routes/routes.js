'use strict';
module.exports = function(app) {
  var List = require('../controllers/сontroller');

  // todoList Routes
  app.route('/items')
    .get(List.list_all_items);
    //.post(todoList.create_a_task);


  // app.route('/items/:itemId')
  //   .get(todoList.read_a_task)
  //   .put(todoList.update_a_task)
  //   .delete(todoList.delete_a_task);
};
