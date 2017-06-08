
require('es6-promise').polyfill();
require('isomorphic-fetch');

function AutoCompleteEndPointHandler(request,response)
{
    var queryParam = request.param("query");
    //console.log(queryParam);

    var ajaxConfig = {
        method: "GET",
        'Content-Type': 'application/json'
    };
    
    var dataDomain="http://d.yimg.com/autoc.finance.yahoo.com";
    var params=`/autoc?query=${queryParam}&region=1&lang=en`; 

    var requestUrl = dataDomain+params;

    //console.log(requestUrl);
    fetch(requestUrl,ajaxConfig)
        .then(r =>  r.json())
        .then(data => {
            response.send(data);
        });
    
}


exports.endPoint = AutoCompleteEndPointHandler;