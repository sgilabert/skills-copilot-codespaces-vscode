// Create a web server that can respond to requests for comments
// from a database

// Import the express library
const express = require('express');

// Create an instance of express
const app = express();

// Import the mysql library
const mysql = require('mysql');

// Import the database credentials
const config = require('./config.json');

// Create a MySQL connection object
const connection = mysql.createConnection(config);

// Connect to the database
connection.connect();

// Use the 'comments' database
connection.query('USE comments');

// Handle requests for comments
app.get('/comments', function(request, response) {
    // Get the comments from the database
    connection.query('SELECT * FROM comments', function(error, rows, fields) {
        // If there was an error, send a 500 error code
        if (error) {
            console.log(error);
            response.status(500).send('Internal Server Error');
        }
        // Send the rows as a JSON object
        else {
            response.send(rows);
        }
    });
});

// Start the server
app.listen(3000);
console.log('Server is ready.');