/*--------------------------------------------*\
    Document   : app.js
    Created on : 27/12/2021
    Author     : Cesar Manuel Hidalgo Rojas
\*--------------------------------------------*/

//references to libraries
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const DB_URI = process.env.DB_URI;

//connecting to mongodb
mongoose.connect(DB_URI)
    .then(db => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

//importing routes
const professionalRoutes = require("./routes/professional");

//settings port & view engine
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use('/', professionalRoutes);
app.use('/public', express.static(path.join(__dirname, "public")));

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}. Press ctrl + c to finish.`);
});