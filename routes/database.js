/**
 * The database.js file is a route module 
 * that contains code needed to connect to
 * the SQL database containing the structure
 * and information for the Patient Care Manager
 * project. This file is the setup portion of
 * the project where the existing database is
 * connected to the frontend through the use
 * of SQL, node/npm packages, and APIs.
 * 
 * Project: Mayo Clinic (PCM) Web Application
 * Author: Andrew Krause
 * Class: CS 364
 * Date: 5/10/2022
 * 
 */

// --> MAYBE SEE IF YOU CAN ACTUALLY USE SQL SYNTAX TO CREATE
// --> THE DATABASE (ADD A CHECK TO SEE IF IT ALREADY EXISTS).
// --> ALSO, SEE IF YOU CAN ALSO USE SQL SYNTAX TO CREATE
// --> TABLES FOR THE DATABASE (AGAIN, HAVE A CHECK THAT ONLY
// --> DOES THIS IF THOSE TABLES DON'T ALREADY EXIST).

// Add the packages required to complete the inital database 
// setup in this file. Included in the required packages is
// a JSON file in the routes folder that contains the PCM
// database setup.
var express = require('express');
var mysql = require('mysql');
var settings = require('./pcmDB-settings.json');

// Create a variable to store the connection
// to the Patient Care Manager (PCM) database.
var pcmDB;

// Create a function to setup the connection to the database.
// The function contains checks that ensure the database is 
// only connected if it has not already been connected to the
// application. The connection is stored in a variable that is
// then returned from the function.
function connectDatabase() {

    // If there is no database that has already been connected,
    // connect the database to the PCM web application.
    if (!pcmDB) {

        // Create a new connection with the PCM SQL database.
        // Make use of a JSON file you stored in the settings
        // variable. The JSON file contains the setup info
        // for the PCM database.
        pcmDB = mysql.createConnection(settings);

        // Finalize the connection and check if there are
        // any errors in connecting.
        pcmDB.connect(function(err){

            // If there are no errors, log that the database
            // was successfully connected.
            if(!err) {
                console.log('Database is connected!');
            } else {

                // Otherwise, log a message indicating that
                // there was an error in connecting the db.
                console.log('Error connecting database!');
            }
        });
    }

    // Return the variable responsible
    // for connecting the database to 
    // the web application.
    return pcmDB;
}

// Export the module for use in the other 
// .js files/routes in the web application.
module.exports = connectDatabase();