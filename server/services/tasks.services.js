
let Task = require('../models/task');
let Category = require('../models/category');
let crypto = require("crypto");
let fields = ["-status", "-due_date", "-init_hour", "-final_hour"];

exports.addTask = function (body) {
    let task = new Task(body);
    return new Promise(function (resolve, reject) {
        task.id = crypto.randomBytes(10).toString("hex");
        task.save()
              .then(tasks => resolve({}))
              .catch(err => reject({}))
    });
}

exports.tasksList = function () {
    return new Promise(function (resolve, reject) {
        Task.find().select(fields)
              .then(tasks => resolve(tasks))
              .catch(err => reject({}));
    });
}

exports.getDetail = function (id) {
    return new Promise(function (resolve, reject) {
        Task.findById(id)
              .then(tasks => resolve(tasks))
              .catch(err => reject({}));
    });
}

exports.editTask = function (req) {
    return new Promise(function (resolve, reject) {
        Task.findById(req.params.id)
              .then(task => {
                task.title = req.body.title;
                task.description = req.body.description;
                task.category = req.body.category;
                task.status = req.body.status;
                task.due_date = req.body.due_date;
                task.init_hour = req.body.init_hour;
                task.final_hour = req.body.final_hour;
                task.favorite = req.body.favorite;
                task.enable = req.body.enable;
          
                task.save()
                    .then(tasks => resolve({}))
                    .catch(err => reject({}))
              })
              .catch(err => reject({}))
    });
}

exports.setFavorite = function (id) {
    return new Promise(function (resolve, reject) {
        Task.findById(id)
              .then(task => {
                  task.favorite = !task.favorite;
                  task.save()
                    .then(tasks => resolve({}))
                    .catch(err => reject({}))
              })
              .catch(err => reject({}));
    });
}

exports.setDisabled = function (id) {
    return new Promise(function (resolve, reject) {
        Task.findById(id)
              .then(task => {
                  task.enable = !task.enable;
                  task.save()
                    .then(tasks => resolve({}))
                    .catch(err => reject({}))
              })
              .catch(err => reject({}));
    });
}

exports.deleteTask = function (id) {
    return new Promise(function (resolve, reject) {
        Task.findByIdAndDelete(id)
              .then(tasks => resolve({}))
              .catch(err => reject({}));
    });
}

exports.filterByParam = function (param) {
    return new Promise(function (resolve, reject) {
        var filter = filterByObject(param);
        Task.find(filter)
              .then(tasks => resolve(tasks))
              .catch(err => reject({}));
    });
}

var filterByObject = function (param) {
    let filter = {};
    if(param.enable){
        filter['enable']=param.enable === 'true'?true:false;
        return filter;
    } else if(param.favorite) {
        filter['favorite']=param.favorite === 'true'?true:false;
        return filter;
    } else {
        return param;
    }
}

exports.countTasks = function () {
    return new Promise(function (resolve, reject) {
        Task.estimatedDocumentCount()
              .then(tasks => resolve({tasks}))
              .catch(err => reject({}));
    });
}

exports.getCategories = function () {
    return new Promise(function (resolve, reject) {
        Category.find()
              .then(tasks => resolve(tasks))
              .catch(err => reject({}));
    });
}