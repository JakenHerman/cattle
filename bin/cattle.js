#!/usr/bin/env node

var googleAPI = require('../lib/google.js');
var arguments = process.argv.slice(2);

if(arguments.length == 0){
    console.log("cattle allows you to access your google calendar through your terminal.");
    console.log("Commands: ");
    console.log(" - 'init': Needs to be executed the first time, to setup the user's google credentials and give permissions.");
    console.log(" - 'cattle today': shows all of todays events.");
    console.log(" - 'cattle tomorrow': shows all of tomorrow's events.");
    console.log(" - 'cattle thisweek': shows all of this week's events");
    
    console.log(" ");
    console.log("Commands coming soon:");
    console.log(" - 'cattle create <event> on <date> at <time>': allows you to create events");
    return;
}

var init = (arguments[0] == init);

if(init){
    //
}