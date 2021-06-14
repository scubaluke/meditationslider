var express = require('express');
var router = express.Router();
const {google} = require('googleapis');

const outh2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `https://namagomeditate.com`,
)

function getGoogleAuthURL() {
  /*
   * Generate a url that asks permissions to the user's email and profile
   */
  const scopes = [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email',
  ];

  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: scopes, 
  });
}

/* google Oauth flow. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
