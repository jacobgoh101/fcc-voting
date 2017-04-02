const express = require('express')
const session = require('express-session')
const app = express()
const passport = require('passport')
const GitHubStrategy = require('passport-github')

passport.use(new GitHubStrategy({
        clientID: "9e2e7002298fa9d0060b",
        clientSecret: "c12d0bd4bc02c7333b81af57fe0b74503010c762",
        callbackURL: "http://localhost:3000/auth/github/callback"
    },
    function (accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));

app.use(session({
    secret: "secret jacob"
}))
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function (user, done) {
    // placeholder for custom user serialization
    // null is for errors
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    // placeholder for custom user deserialization.
    // maybe you are going to get the user from mongo by id?
    // null is for errors
    done(null, user);
});

module.exports =  {app, passport};