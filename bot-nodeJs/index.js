const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.set('port', (process.env.PORT || 5000))

const REQUIRE_AUTH = true
const AUTH_TOKEN = 'e085e2a7664642f5b63a930118478383'
fs= require('fs');



app.get('/', function (req, res) {
  res.send('Use the /webhook endpoint.')
})
app.get('/webhook', function (req, res) {
  res.send('You must POST your request')
})

app.post('/webhook', function (req, res) {








    // we expect to receive JSON data from api.ai here.
  // the payload is stored on req.body
  console.log(req.body)

    if (req.body.result.action=='init_setup'){

    console.log("Inside the ACTIONNNNNNNNNNNNNNNNNNNNN")




        params = req.body.result.contexts[0].parameters;

        emailID = params.EmailID;
        webTitle = params.Title;
        webOwner = params.user_name;
        navCount = params.nav_count;
        navArray = params['Nav_Bar.original'].split(',');
        para = params.content;
        footCount = params.foot_count;
        footArray = params['footer.original'].split(',');

// contexts= JSON.parse()

        console.log(navArray);

        html1="<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"> <title>"+ webTitle+"</title> <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css\" integrity=\"sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ\" crossorigin=\"anonymous\"> <script src=\"https://code.jquery.com/jquery-3.1.1.slim.min.js\" integrity=\"sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n\" crossorigin=\"anonymous\"></script> <script src=\"https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js\" integrity=\"sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb\" crossorigin=\"anonymous\"></script> <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js\" integrity=\"sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn\" crossorigin=\"anonymous\"></script> <style> .text{ color: white; align-items: center; } .footer { float: right; position: fixed; height: 50px; left: 0; bottom: 20px; width: 100%; color: white; text-align: center; } .link{ color: white; font-size: 25px; margin-left: 100px; margin-right: 100px; } .nav-link{ color: white; } </style> </head> <body style=\"background-color:#FFEB3B \"> <div align=\""+params.Alignment+"\"></div><p style=\"font-size: 100px \"> "+webTitle+"</p> </div> <nav class=\"navbar navbar-toggleable navbar-inverse bg-inverse\"> <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsupportedcontent\" aria-controls=\"navbarsupportedcontent\" arai-expanded=\"false\" aria-label=\"Toggle navigation\"> <span ></span></button> <div class=\"collapse navbar-collapse\" id=\"navbarsupportedcontent\" > <ul class=\"navbar-nav mr-auto\">";
        navHtml="";
        for(i=0;i<navArray.length;++i){

            navHtml=navHtml+"<li class=\"navbar-brand \"> <a class=\"nav-link\">";
            navHtml=navHtml+navArray[i];
            navHtml=navHtml+"<span class=\"sr-only\"></span></a> </li>"


        }
        postNavHtml=html1+navHtml;

        postNavHtml=postNavHtml+"</ul> </div> </nav> <div > <div style=\" display: inline-block; vertical-align: middle;\"> <p class=\"text\" style=\"font-size: 60px; margin-left: 100px; margin-right: 100px; text-align: center; \">";
        postNavHtml=postNavHtml+para+"</p> </div> </div> <footer class=\"footer\" style=\"background-color:#000000\">";

        footHtml="";

        for(j=0;j<footArray.length;++j){

            footHtml=footHtml+"<a class=\"link\" href=\"default.asp\" target=\"_blank\">";
            footHtml=footHtml+footArray[j];
            footHtml=footHtml+"</a>";


        }

        postFootHtml=postNavHtml+footHtml+"</footer></body>";

        fs.writeFile('newCustomSite.html', postFootHtml, function (err) {
            if (err){
                throw err;
            }
        })











    }



  // we have a simple authentication
  if (REQUIRE_AUTH) {
    if (req.headers['auth-token'] !== AUTH_TOKEN) {
      return res.status(401).send('Unauthorized')
    }
  }

  // and some validation too
  if (!req.body || !req.body.result || !req.body.result.parameters) {
    return res.status(400).send('Bad Request')
  }

  // the value of Action from api.ai is stored in req.body.result.action
  console.log('* Received action -- %s', req.body.result.action)

  // parameters are stored in req.body.result.parameters
  var userName = req.body.result.parameters['given-name']
  var webhookReply = 'Hello ' + userName + '! Welcome from the webhook.'

  // the most basic response
  res.status(200).json({
    source: 'webhook',
    speech: webhookReply,
    displayText: webhookReply
  })
})

app.listen(app.get('port'), function () {
  console.log('* Webhook service is listening on port:' + app.get('port'))
})
