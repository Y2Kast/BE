const express = require('express');
const dbConnection= require('./src/config/dbConfig')

const app = express();
const port = 3000;

dbConnection();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
