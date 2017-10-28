res = {
    "id": "142bb23c-e6a8-4f2a-b0f0-f252ed0789bf",
    "timestamp": "2017-10-28T05:58:39.105Z",
    "lang": "en",
    "result": {
        "source": "agent",
        "resolvedQuery": "About Us, Call at: 982411244, Leave a review",
        "action": "init_setup",
        "actionIncomplete": false,
        "parameters": {
            "Alignment": "center",
            "content": "Feast for your taste buds PLACE YOUR FIRST ORDER AND GET 60% DISCOUNT",
            "EmailID": "neerajdev@mail.com",
            "foot_count": 3,
            "footer": "About Us Call at 982411244 Leave a review",
            "Nav_Bar": "Home Outlets Contact Us",
            "nav_count": 3,
            "Title": "Delicious Delight",
            "user_name": "Neeraj Verma"
        },
        "contexts": [
            {
                "name": "website_setup",
                "parameters": {
                    "Nav_Bar": "Home Outlets Contact Us",
                    "foot_count.original": "3",
                    "EmailID": "neerajdev@mail.com",
                    "footer": "About Us Call at 982411244 Leave a review",
                    "EmailID.original": "neerajdev@mail.com",
                    "user_name": "Neeraj Verma",
                    "nav_count.original": "3",
                    "Title": "Delicious Delight",
                    "content": "Feast for your taste buds PLACE YOUR FIRST ORDER AND GET 60% DISCOUNT",
                    "nav_count": 3,
                    "Title.original": "Delicious Delight",
                    "Alignment": "center",
                    "footer.original": "About Us, Call at: 982411244, Leave a review",
                    "foot_count": 3,
                    "Alignment.original": "center",
                    "Nav_Bar.original": "Home, Outlets, Contact Us",
                    "content.original": "Feast for your taste buds!!!!!!   PLACE YOUR FIRST ORDER AND GET 60% DISCOUNT!!",
                    "user_name.original": "Neeraj Verma"
                },
                "lifespan": 50
            }
        ],
        "metadata": {
            "intentId": "4ea0c499-6d47-450e-b4fc-78274336723f",
            "webhookUsed": "false",
            "webhookForSlotFillingUsed": "false",
            "intentName": "Name"
        },
        "fulfillment": {
            "speech": "Thank You! Lets start with the designing part. To begin send OK.",
            "messages": [
                {
                    "type": 0,
                    "id": "3b56f232-631c-44b1-befb-bd2b3b17d0fb",
                    "speech": "Great! Lets start the fun part now.  Type OK to continue."
                }
            ]
        },
        "score": 1
    },
    "status": {
        "code": 200,
        "errorType": "success"
    },
    "sessionId": "11872bb4-7676-4cb0-93e5-43769bbe9519"
};
params = res.result.contexts[0].parameters;

// console.log(params);


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

html1="<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"> <title>"+ webTitle+"</title> <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css\" integrity=\"sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ\" crossorigin=\"anonymous\"> <script src=\"https://code.jquery.com/jquery-3.1.1.slim.min.js\" integrity=\"sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n\" crossorigin=\"anonymous\"></script> <script src=\"https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js\" integrity=\"sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb\" crossorigin=\"anonymous\"></script> <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js\" integrity=\"sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn\" crossorigin=\"anonymous\"></script> <style> .text{ color: white; align-items: center; } .footer { float: right; position: fixed; height: 50px; left: 0; bottom: 20px; width: 100%; color: white; text-align: center; } .link{ color: white; font-size: 25px; margin-left: 100px; margin-right: 100px; } .nav-link{ color: white; } </style> </head> <body style=\"background-color:#FFEB3B \"> <div align=\""+params.Alignment+"<div align=\"right\" > <p style=\"font-size: 100px \"> <img src=\"\" height=\"100px\" width=\"100px\">"+webTitle+"</p> </div> <nav class=\"navbar navbar-toggleable navbar-inverse bg-inverse\"> <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsupportedcontent\" aria-controls=\"navbarsupportedcontent\" arai-expanded=\"false\" aria-label=\"Toggle navigation\"> <span ></span></button> <div class=\"collapse navbar-collapse\" id=\"navbarsupportedcontent\" > <ul class=\"navbar-nav mr-auto\">";
navHtml="";
for(i=0;i<navArray.length;++i){

    navHtml=navHtml+"<li class=\"navbar-brand \"> <a class=\"nav-link\">";
    navHtml=navHtml+navArray[i];
    navHtml=navHtml+"<span class=\"sr-only\"></span></a> </li>"


}
postNavHtml=html1+navHtml;

postNavHtml=postNavHtml+"</ul> </div> </nav> <div > <div style=\" display: inline-block; vertical-align: middle;\"> <p class=\"text\" style=\"font-size: 25px; margin-left: 100px; margin-right: 100px; text-align: center; \">";
postNavHtml=postNavHtml+para+"</p> </div> </div> <footer class=\"footer\" style=\"background-color:#000000\">";

footHtml="";

for(j=0;j<footArray.length;++j){

    footHtml=footHtml+"<a class=\"link\" href=\"default.asp\" target=\"_blank\">";
    footHtml=footHtml+footArray[j];
    footHtml=footHtml+"</a>";


}

postFootHtml=postNavHtml+footHtml+"</footer></body>";

console.log(postFootHtml)

