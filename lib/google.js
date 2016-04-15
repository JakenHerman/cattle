var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;

var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);


//generate url to ask for permission for google calendar
var url = oauth2Client.generateAuthURL({
    access_type: 'offline', 
    scope: 'https://www.googleapis.com/auth/calendar'
});

oauth2Client.getToken(code, function(err, tokens) {
   if(!err){
       oauth2Client.setCredentials(tokens);
   }
});