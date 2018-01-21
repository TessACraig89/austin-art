//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/************
 * DATABASE *
 ************/

//require models TC
var db = require('./models');

/**********
 * ROUTES *
 **********/
var index = require('./routes/index');
var userProfile = require('./routes/userProfile');
var art = require('./routes/arts');
var login = require('./routes/login');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/', index);
app.use('/userProfile', userProfile);
app.use('/art', art);
app.use('/login', login);




/**********
 * Oauth *
 **********/
const passport = require('passport');
const expressSession = require('express-session');
const User = require('./models/user');
const ENV = require('./app-env');
const findOrCreate = require('mongoose-findorcreate');
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
mongoose.connect('mongodb://localhost:27017/austin-art');


const googleClientKey = ENV.GOOGLE_CLIENT_ID;
const googleClientSecret = ENV.GOOGLE_CLIENT_SECRET;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// Finish setting up the Sessions
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

//session
passport.use(new GoogleStrategy({
    clientID: googleClientKey,
    clientSecret: googleClientSecret,
    callbackURL: "http://127.0.0.1:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
        //check user table for anyone with a google ID of profile.id
        User.findOne({
          // console.log("found a user");
            'google.id': profile.id
        }, function(err, user) {
            if (err) {
                return done(err);
            }
            //No user was found... so create a new user with values from Google (all the profile. stuff)
            if (!user) {
              // console.log('not founds oozer');
                user = new User({
                    google: profile
                });
                user.save(function(err) {
                    if (err) console.log(err);
                    return done(err, user);
                });
            } else {
                //found user. Return
                return done(err, user);
            }
        });
    }
));



// request gooogle
app.get('/auth/google', passport.authenticate('google', { scope: "email" }));

// google callback route
app.get('/auth/google/callback',
  passport.authenticate('google', { successRedirect: '/userProfile', failureRedirect: '/login' }));

// Logout route
app.get('/logout', function(req, res) {
    req.session.destroy(function(e){
        req.logout();
        res.redirect('/login');
    });
});

//button
// $('#artButton').on('click'(function() {
//   res.redirect('/art');
// }));

/*
 * JSON API Endpoints
 */

app.get('/api', function api_index (req, res){
  res.json({
    message: "Welcome to Austin Art!",
    documentation_url: "https://github.com/TessACraig89/austin-art/api.md",
    base_url: "",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
});

app.get('/api/art', function albumsIndex(req, res) {
  console.log('hi');
  res.json('hello');
  // db.Art.find({}, function(err, art) {
  //   res.json('hello');
  // });
});


/**********
 * SERVER *
 **********/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
