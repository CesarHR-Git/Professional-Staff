/*--------------------------------------------*\
    Document   : professional.js
    Created on : 27/12/2021
    Author     : Cesar Manuel Hidalgo Rojas
\*--------------------------------------------*/

const express = require("express");
const router = express.Router();
express.Router();

//controller
const professionalController = require("../controllers/professionalController");

//functions
/**function list */
router.get('/', professionalController.list);
/**function list employees */
router.get('/listView', professionalController.employees);
/**function view */
router.get('/view/:id',professionalController.view);
/**function get to add */
router.get('/addView', professionalController.addView);
/**function post to add */
router.post('/add', professionalController.add);
/**function get to edit */
router.get('/edit/:id',professionalController.edit);
/**function post to update */
router.post('/edit/:id',professionalController.update);
/**function delete */
router.get('/delete/:id',professionalController.delete);

//exports
module.exports = router;