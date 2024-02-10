const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/userRouter.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/', userRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
