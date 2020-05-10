'use strict'

const express = require('express');

const config = require('./config');
const logger = require('./middleware/logger');

const app = express();

app.use(logger);
//use the following code to serve images,
//CSS files, and JavaScript files in a directory named public:
app.use(express.static('public'));

app.listen(
  config.PORT,
  () => {
    console.log(`Example app listening at http://localhost:${config.PORT} (${config.MODE} mode)`);
  }
)
