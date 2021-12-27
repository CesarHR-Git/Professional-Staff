/*--------------------------------------------*\
    Document   : professionalModel.js
    Created on : 27/12/2021
    Author     : Cesar Manuel Hidalgo Rojas
\*--------------------------------------------*/

const mongoose = require("mongoose");
const schema = mongoose.Schema;

//Schema JSON
const professionalSchema = new schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    resume: String,
    url_image: String
});

//exports
module.exports = mongoose.model('dataProfessional',professionalSchema);