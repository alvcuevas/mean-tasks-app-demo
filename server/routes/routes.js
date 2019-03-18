const express = require('express');
const app = express();
const appRoutes = express.Router();
let Prueba = require('../models/task');
let Category = require('../models/category');
let Controller = require('../controllers/tasks.controller');

appRoutes.route('/').get(Controller.tasksList);
appRoutes.route('/add').post(Controller.addTask);
appRoutes.route('/detail/:id').get(Controller.getDetail);
appRoutes.route('/edit/:id').put(Controller.editTask);
appRoutes.route('/favorite/:id').put(Controller.setFavorite);
appRoutes.route('/disable/:id').put(Controller.setDisabled);
appRoutes.route('/delete/:id').delete(Controller.deleteTask);
appRoutes.route('/filter').get(Controller.filterByParam);
appRoutes.route('/count').get(Controller.countTasks);
appRoutes.route('/categories').get(Controller.getCategories);


module.exports = appRoutes;