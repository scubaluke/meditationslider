require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done ) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => done(null, user))
})

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    // console.log('accessToken:', accessToken);
    // console.log('refresh token', refreshToken);
    // console.log('profile', profile);
    User.findOne({ googleId: profile.id })
    .then((existingUser) => {
      if (existingUser) {
        done(null, existingUser);
      } else {
        new User({ 
          googleId: profile.id,
          first_name: profile.name.givenName,
          last_name: profile.name.familyName,
          email: profile._json.email,
          last_login: new Date().toJSON(),
        }).save()
        .then(user => done(null, user))
        .catch(err => console.error(err))
      }
    }).catch(err => console.error(err))
 
  }))