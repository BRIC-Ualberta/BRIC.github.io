const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

// Setup middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',       // or the address of your database
  user: 'root',            // your database username
  password: 'Top4Of9The1Morning',    // your database password
  database: 'email_signup' // your database name
});

// Create a POST endpoint to handle the form submission
app.post('/signup', (req, res) => {
  const email = req.body.email;

  // Insert the email into the database, ensuring it is unique
  connection.query(
    'INSERT IGNORE INTO email_signups (email) VALUES (?)',
    [email],
    (err, result) => {
      if (err) {
        res.status(500).send('Error occurred while submitting the email');
      } else if (result.affectedRows > 0) {
        res.send('Thank you for signing up!');
      } else {
        res.send('This email is already registered.');
      }
    }
  );
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
