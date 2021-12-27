/*--------------------------------------------*\
    Document   : professionalController.js
    Created on : 27/12/2021
    Author     : Cesar Manuel Hidalgo Rojas
\*--------------------------------------------*/

const controller = {};
const task = require("../models/professionalModel");

/**function list */
controller.list = (async function(req, res){
    const tasks = await task.find();
    res.render('home',{
        tasks //tasks: tasks
    });
});

/**function employees */
controller.employees = (async function(req, res){
    const tasks = await task.find();
    res.render('professionalList',{
        tasks
    });
});

/**function view */
controller.view = (async function(req, res){
    const {id} = req.params;
    const tasks = await task.findById(id);
    res.render('professionalView',{
        tasks
    });
});

/**function get to add */
controller.addView = (function(req, res){
    return res.render("professionalAdd");
});

/**function post to add */
controller.add = (async function(req, res){
    const taskAdd = new task(req.body);
    await taskAdd.save();
    res.redirect('/listView');
});

/**function get to edit */
controller.edit = (async function(req, res){
    const {id} = req.params;
    const tasks = await task.findById(id);
    res.render('professionalEdit',{
        tasks
    });
});

/**function post to update */
controller.update = (async function(req, res){
    const {id} = req.params;
    await task.updateOne({_id:id},req.body);
    res.redirect('/listView');
});

/**function delete */
controller.delete = (async function(req, res){
    const {id} = req.params;
    await task.remove({_id: id});
    res.redirect('/listView');
});

module.exports = controller;