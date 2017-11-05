var express = require('express'),                 // helps to organize web apps in MVC archiecture for server side
     bodyParser = require("body-parser"),                //extract the entire body of an incoming request and exposes it to req.body
     morgan = require('morgan'),                         //logs every request to console
     mongoose = require('mongoose'), 
     methodOverride = require('method-override'),
     database = require('./config/database');
     
     //overrides method header in the request                   //schema based solution to model your app
     port = process.env.port || 8080;


//configuration
mongoose.connect(database.remoteUrl);                //connect to a local mongoDB instance.

 
    
// create an express application
//app.use is a middleware used to render pages    
var router = require('./user_routes.js')

    .use(function(req, res, next) {
  
      console.log(req.method, req.url);
  
      next(); 
  });
  
var app = express()

    .use(express.static('./public'))                   //to set static files location 

    .use(bodyParser.json())

    .use(bodyParser.json({type: 'applcation/vnd.api.json'}))

    .use(bodyParser.urlencoded({'extended': 'true'}))

    .use(morgan())
    
    .use(morgan('dev'))         

    .use(methodOverride('X-HTTP-Method-Override'))

    .use('/', router)

  //  .use(serveIndex(_dirname + '/public'))

    .listen(port);


console.log('application running on port ' + port)



module.exports = app;
