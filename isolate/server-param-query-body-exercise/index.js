'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config');
const logger = require('./middleware/logger');

const app = express();

app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.raw({ type: 'text/plain' }));

app.use('/', express.static(path.join(__dirname, 'public')));

app.post('/api/:value', (req, res) => {
  const paramValue = req.params.value;
  const queryValue = req.query.value;
  const bodyValue = req.body.value;

<<<<<<< HEAD
  console.log(`param value: ${paramValue}`);
  console.log(`query value: ${queryValue}`);
  console.log(`body value: ${bodyValue}`);

  const responseData = {
    paramValue,
    queryValue,
    bodyValue,
  };
  res.json(responseData);
});
//http://localhost:8080/param/1  method post
app.post('/param/:value', (req, res) => {
  const paramValue = req.params.value;
  console.log(`param value: ${paramValue}`);
  const responseData = {
    paramValue
  };
  res.json(responseData);
  //res.status(200)
  // .send(responseData);
});
//http://localhost:8080/query?value= method post
//http://localhost:8080/query?value=1
app.post('/query', (req, res) => {
  const queryValue = req.query;
  console.log(`query value: ${queryValue}`);
  const responseData = {
    queryValue
  };
  res.json(responseData);
  //res.status(200)
  // .send(responseData);
});

//http://localhost:8080/body/   method post 
app.post('/body/', (req, res) => {
  const bodyValue = req.body.toString();
  console.log(`query value: ${bodyValue}`);
  const responseData = {
    bodyValue
  };
  res.json(responseData);
  //res.status(200)
  // .send(responseData);
});
app.listen(config.PORT, () => {
  console.log(
    `Example app listening at http://localhost:${config.PORT} (${config.MODE} mode)`
  );
});
//good to note
/*app.get('/hi/:param1', function(req,res){} );
=======
// declare the routes
app.post('/param/:value', (req, res) => {
  // read value from the param
  _;

  console.log(`param value: ${paramValue}`);

  const responseData = {
    paramValue,
  };
  res.json(responseData);
});

app.post('/query', (req, res) => {
  // read value from the query
  _;

  console.log(`query value: ${queryValue}`);

  const responseData = {
    queryValue,
  };
  res.json(responseData);
});

app.post('/body', (req, res) => {
  // read value from the body
  _;

  console.log(`body value: ${bodyValue}`);

  const responseData = {
    bodyValue,
  };
  res.json(responseData);
});
>>>>>>> upstream/master

and given this URL http://www.google.com/hi/there?qs1=you&qs2=tube

You will have:

req.query

{
  qs1: 'you',
  qs2: 'tube'
}

req.params

{
  param1: 'there'
}*/