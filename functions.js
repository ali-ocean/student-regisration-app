const mysql = require('mysql');

// Configure your database connection
const dbConfig = {
    host: 'elumnimysql.mysql.database.azure.com',
    user: 'elumni@elumnimysql.mysql.database.azure.com',
    password: 'Dkbqjl8b',
    database: 'elumni',
    port: 3306,
    ssl: true // Set to true if using SSL/TLS
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Function for Login
module.exports.login = async function (context, req) {
    // Use the pool to get a connection
    pool.getConnection((err, connection) => {
        if (err) {
            context.log.error(err);
            context.res = {
                status: 500,
                body: "Error connecting to the database."
            };
            context.done();
            return;
        }

        // Your login logic here using the 'connection' object

        // Release the connection back to the pool
        connection.release();
        
        context.res = {
            body: "Login functionality will be implemented here."
        };

        context.done();
    });
};

// Function for Signup
module.exports.signup = async function (context, req) {
    // Use the pool to get a connection
    pool.getConnection((err, connection) => {
        if (err) {
            context.log.error(err);
            context.res = {
                status: 500,
                body: "Error connecting to the database."
            };
            context.done();
            return;
        }

        // Your signup logic here using the 'connection' object

        // Release the connection back to the pool
        connection.release();
        
        context.res = {
            body: "Signup functionality will be implemented here."
        };

        context.done();
    });
};

// Function for Survey
module.exports.survey = async function (context, req) {
    // Use the pool to get a connection
    pool.getConnection((err, connection) => {
        if (err) {
            context.log.error(err);
            context.res = {
                status: 500,
                body: "Error connecting to the database."
            };
            context.done();
            return;
        }

        // Your survey logic here using the 'connection' object

        // Release the connection back to the pool
        connection.release();
        
        context.res = {
            body: "Survey submission functionality will be implemented here."
        };

        context.done();
    });
};
