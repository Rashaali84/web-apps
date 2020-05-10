'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const logger = require('./middleware/logger');

// create the express app
const app = express();

// log all requests
app.use(logger);
// parse the HTTP body
app.use(bodyParser.json());
app.use(bodyParser.raw({ type: 'text/plain' }));

app.get('/', (req, res) => {
  const reply = `Welcome to the greeter!`;

  res.status(200).send(reply);
});

// GET: '/greeter/hi'
// response: status:200, "hello (query name), happy (query day)!"
//http://localhost:8080/greeter/hi?name=hello
app.get('/greeter/hi', (req, res) => {

  const name = req.body.name;
  const dayName = getDayNameNow();
  const reply = `hello(${name}), happy (${dayName})!`;

  res.status(200)
    .send(reply);
})
// GET: '/greeter/bye'
// response: status:200, "good bye (query name), happy (query day)!"
//http://localhost:8080/greeter/bye?name=hello
app.get('/greeter/bye', (req, res) => {

  const name = req.body.name;
  console.log(name);
  const reply = `good bye (${name}), happy (${getDayNameNow()})!`;

  res.status(200)
    .send(reply);
})
// POST: '/greeter/hi'
// behavior: log "hello (body name), happy (body day)!"
// response: status:200
//http://localhost:8080/greeter/hi?name=hyf
app.post('/greeter/hi', (req, res) => {
  /*if (!req.body.name) {
    res.status(400).send('name is required .. ')
    return;
  }*/
  //const body = req.body.toString();
  //console.log(body);
  const name = req.body.name;
  const reply = `hello (${name}), happy (${getDayNameNow()})!`;

  res.status(200)
    .send(reply);
});
// POST: '/greeter/bye'
// behavior: log "good bye (body name), happy (body day)!"
// response: status:200
//http://localhost:8080/greeter/bye?name=hyf
app.post('/greeter/bye', (req, res) => {

  const body = req.body.toString();
  console.log(body);
  const name = req.body['name'];
  const reply = `good bye (${name}), happy (${getDayNameNow()})!`;

  res.status(200)
    .send(reply);
});
function getDayNameNow() {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var d = new Date();
  var dayName = days[d.getDay()];
  console.log(dayName);
  return dayName;
}
// start the server
app.listen(
  config.PORT,
  () => {
    console.log(`Example app listening at http://localhost:${config.PORT} (${config.MODE} mode)`);
  }
);
