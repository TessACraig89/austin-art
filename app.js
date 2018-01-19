var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//scottie
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

// routes
var index = require('./routes/index');
var user = require('./routes/users');
var art = require('./routes/arts');
var login = require('./routes/login');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/user', user);
app.use('/art', art);
app.use('/login', login);

//scottie
const googleClientKey = ENV.GOOGLE_CLIENT_ID;
const googleClientSecret = ENV.GOOGLE_CLIENT_SECRET;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

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

// Finish setting up the Sessions
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// -> Google
app.get('/auth/google', passport.authenticate('google', { scope: "email" }));

// <- Google
app.get('/auth/google/callback',
  passport.authenticate('google', { successRedirect: '/', failureRedirect: '/' }));

// Logout
app.get('/logout', function(req, res){
  req.logout();
  res.redirect("/")
})

// Home page
app.get('/', function(req, res){
  console.log(req.user);
  res.render('index', {user: req.user});
  // res.send('hello world')
});


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
