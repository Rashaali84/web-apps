const handlers = require('./handlers');
const express = require('express');

// create the router
var router = express.Router(); // router instance in express module;


/*router.use((req, res, next) => {
  console.log('routesss!');
  next();
});*/

// write the routes

router.get('/', (req, res) => {
  res.send('routes!');
});

//http://localhost:8080/api/list
router.get('/list', handlers.list);

//http://localhost:8080/api/create?name=file2
router.post('/create?:name', handlers.create);


// export the router
module.exports = router;
