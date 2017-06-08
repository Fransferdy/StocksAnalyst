const express = require('express');
const mongo = require('mongodb');
const request = require('request-promise');  
const apiRoutes =  require('./apiroutes.js');

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5

const app = express();
const port = 3030;

/* pre processing example
app.use((request,response,next) => {
   // console.log(request.headers);
    next();
} )

app.use((request,response,next) => {
    request.chance = Math.random();
    next();
} )
*/

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./public'));

apiRoutes.routes.map(function(route,i){
    switch (route.method)
    {
        case 'GET':
        app.get(route.path,route.func);
        break;
        case 'POST':
        app.post(route.path,route.func);
        break;
        case 'PUT':
        app.put(route.path,route.func);
        break;
        case 'DELETE':
        app.delete(route.path,route.func);
        break;
        case 'PATCH':
        app.patch(route.path,route.func);
        break;
        default:
        console.log('Route Method not Recognized');
    }
});


app.listen(port, (err) => {
    if (err)
    {
        return console.log("Dammit, something bad happened! ",err);
    }
    console.log(`server is listening on ${port}`);
})

app.use(function(request,response, next){
  
  // nothing answered so far, check if it's not an api request, then send the react page
  if (request.accepts('html') && request.path.indexOf("api/")===-1) {
    response.sendFile('./public/index.html',{ root: __dirname });
    return;
  }

  // respond with json
  if (request.accepts('json')) {
    response.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  response.type('txt').send('Not found');
});

//error handling
app.use( (err,request,response,next) => {
    console.log(err);
    response.status(500).send("oooh this is awkward, something bad happened");
} )
