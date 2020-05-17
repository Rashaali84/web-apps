const handlers = require('./handlers.js');
const express = require('express');

// create the router
var router = express.Router();

router.use((req, res, next) => {
  console.log('routes!');
  next();
});

router.get('/', (req, res) => {
  res.send('routes!');
});

// write the routes!
// refactor these routes into /api


router.post('/param/:value', handlers.valueParam);
//http://localhost:8080/api/query?value=15
router.post('/query?:value', handlers.query);

router.post('/body', handlers.body);//send value in body from postman



module.exports = router;
