

//import all api handlers

const AutoComplete = require('./API/AutoCompleteEndPoint.js');

function afunction(request,response)
{
console.log(request.body);
response.send(JSON.stringify({status:'ok'}));
}

apiroutes = [
{method:'GET',path:'/api/data',func:afunction},
{method:'PUT',path:'/api/stock',func:afunction},
{method:'GET',path:'/api/stockname',func:AutoComplete.endPoint}
];

exports.routes = apiroutes;