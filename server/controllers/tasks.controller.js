
let Service = require('../services/tasks.services');

exports.addTask = function(req,res) {
    Service.addTask(req.body)
        .then(data => res.status(200).json({'OK': 'Task added successfully'}))
        .catch(err => res.status(400).send("Unable to add the task"));
}

exports.tasksList = function(req,res) {
    Service.tasksList()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).send("Unable to fetch tasks list"));
}

exports.getDetail = function(req,res) {
    Service.getDetail(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).send("Unable to get task details"));
}

exports.editTask = function(req,res) {
    Service.editTask(req)
        .then(data => res.status(200).json({'OK': 'Task edited succesfully'}))
        .catch(err => res.status(400).send("Unable to edit the task"));
}

exports.setFavorite = function(req,res) {
    Service.setFavorite(req.params.id)
        .then(data => res.status(200).json({'OK': 'Task set favorite succesfully'}))
        .catch(err => res.status(400).send("Unable to edit the task"));
}

exports.setDisabled = function(req,res) {
    Service.setDisabled(req.params.id)
        .then(data => res.status(200).json({'OK': 'Task set disabled succesfully'}))
        .catch(err => res.status(400).send("Unable to edit the task"));
}

exports.deleteTask = function(req,res) {
    Service.deleteTask(req.params.id)
        .then(data => res.status(200).json({'OK': 'Task removed successfully'}))
        .catch(err => res.status(400).send("Unable to edit the task"));
}

exports.filterByParam = function(req,res) {
    Service.filterByParam(req.query)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).send("Unable to find the task"));
}

exports.countTasks = function(req,res) {
    Service.countTasks()
        .then(number => res.status(200).json(number))
        .catch(err => res.status(400).send("Unable to count tasks"));
}

exports.getCategories = function(req,res) {
    Service.getCategories()
        .then(number => res.status(200).json(number))
        .catch(err => res.status(400).send("Unable to get categories"));
}