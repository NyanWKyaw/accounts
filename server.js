const cors = require("cors");
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001;

  
app.use(cors());
app.listen(port);

var routes = require('./api/routes/accountListRoutes')
routes(app);

console.log('Account list RESTful API server started on: ' + port);
