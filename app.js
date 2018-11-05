const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 8000;

//Configuration
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'luka1234',
  database : 'express'
});

app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.get('/login', (req, res) => {
    res.send('Login page');
});

app.get('/users', (req, res) => {
    connection.connect();
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
    });
    connection.end();
    res.write('GG WP')
    res.end();
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));