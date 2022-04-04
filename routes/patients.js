/**
 * The patients.js file is a route module that
 * contains the routes for the patients in the 
 * database. The patients in the database can
 * be edited and removed. Other patient entities
 * can also be added to the database.
 * 
 * Project: Mayo Clinic (PCM) Web Application
 * Author: Andrew Krause
 * Class: CS 364
 * Date: 5/10/2022
 * 
 */

// Add the packages that are required.
var express = require('express');
var patientRouter = express.Router();

// Include the database route in order to 
// work with the data in the patients table.
const database = require('./database.js');

/* SECTION: GET INFORMATION FROM SERVER (GET) */ 

// Creat a route to render the patients page.
// In this route, all of the data in the Patient
// table of the database is sent to be displayed 
// on the patients page of the website.
patientRouter.get("/patients", function(req, res, next) {

    // Create a query to SELECT all of the patients in
    // the Patient table.
    var sql = "SELECT * FROM PCM.Patient";

    // Get all of the patients from the patients table. (YOU WILL
    // DISPLAY THIS ON THE PATEINTS VIEW PAGE AT SOME POINT!!!)
    database.query(sql, function(error, data, fields) {

        // If there is an error, log the error.
        if(error) {
            console.log(error);
        } else {

            // Otherwise, send the data to the
            // patients.ejs page in order to 
            // display that data.
            res.render("patients", {title: "Patient List", patientData: data});
        }

        // Otherwise, log the data obtained 
        // from the database.
        // return console.log(data); // --> DEBUGGING STATEMENT; DELETE LATER!!!
    });
});

/* SECTION: PROCESS REQUESTS MADE TO SERVER (POST) */

// ------------ CRUD Operations for Patient ------------
// Create a post request for when the user wants to 
// create a new patient.
patientRouter.post("/new_patient", function(req, res){

    // ADD MORE...
});

// Create a post request for when the user wants to
// update a given patient.
patientRouter.post("/update_patient", function(req, res){

    // ADD MORE...
});

// Create a post request for when the user wants to
// remove a given patient.
patientRouter.post("/remove_patient", function(req, res){

    // ADD MORE...
});

// Export the module for use in the main app.js file.
module.exports = patientRouter;